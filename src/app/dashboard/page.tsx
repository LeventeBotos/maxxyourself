"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error: {error.message}</p>
      </div>
    );
  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Please sign in to view your dashboard.</p>
      </div>
    );

  return (
    <div className=" min-h-screen text-white ">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome, {user.email}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Workout Plan */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Workout Plan</h2>
            <ul className="list-disc list-inside">
              {userProfile?.workoutPlan?.length ? (
                userProfile.workoutPlan.map((workout: any, index: number) => (
                  <li key={index}>{workout}</li>
                ))
              ) : (
                <li>No workout plan yet.</li>
              )}
            </ul>
          </div>

          {/* Nutrition Plan */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Nutrition Plan</h2>
            <ul className="list-disc list-inside">
              {userProfile?.nutritionPlan?.length ? (
                userProfile.nutritionPlan.map((meal: any, index: number) => (
                  <li key={index}>{meal}</li>
                ))
              ) : (
                <li>No nutrition plan yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

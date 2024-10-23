// app/signup/page.js
"use client";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [error, setError] = useState(null);

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      location.replace("/dashboard");
      // Redirect or show success message
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Create an Account
        </h2>
        <button
          onClick={handleGoogleSignup}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up with Google
        </button>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
}

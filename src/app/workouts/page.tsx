"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlanCard from "../../components/PlanCard";

export default function Workouts() {
  const [workoutPlans, setWorkoutPlans] = useState([]);

  useEffect(() => {
    fetch("https://your-firebase-app.cloudfunctions.net/getWorkoutPlans") // Replace with your Firebase URL
      .then((res) => res.json())
      .then((data) => setWorkoutPlans(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Workout Plans</h1>
        {workoutPlans.map((plan: any) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            description={plan.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

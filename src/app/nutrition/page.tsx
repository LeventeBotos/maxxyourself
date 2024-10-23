"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlanCard from "../../components/PlanCard";

export default function Nutrition() {
  const [nutritionPlans, setNutritionPlans] = useState([]);

  useEffect(() => {
    fetch("https://your-firebase-app.cloudfunctions.net/getNutritionPlans") // Replace with your Firebase URL
      .then((res) => res.json())
      .then((data) => setNutritionPlans(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Nutrition Plans</h1>
        {nutritionPlans.map((plan: any) => (
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

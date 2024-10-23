"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlanCard from "../../components/PlanCard";

export default function Performance() {
  const [performanceTips, setPerformanceTips] = useState([]);

  useEffect(() => {
    fetch("https://your-firebase-app.cloudfunctions.net/getPerformanceTips") // Replace with your Firebase URL
      .then((res) => res.json())
      .then((data) => setPerformanceTips(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Sexual Performance Tips</h1>
        {performanceTips.map((tip: any) => (
          <PlanCard
            key={tip.id}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

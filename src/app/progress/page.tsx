"use client";

import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Progress = () => {
  const [progress, setProgress] = useState("");

  const updateProgress = async (e: any) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        workoutProgress: progress,
      });
    }
  };

  return (
    <form onSubmit={updateProgress}>
      <textarea
        placeholder="Log your workout progress"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <button type="submit">Update Progress</button>
    </form>
  );
};

export default Progress;

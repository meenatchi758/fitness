// src/components/WorkoutForm.js
import { useState } from "react";

export default function WorkoutForm({ addWorkout }) {
  const [steps, setSteps] = useState("");
  const [calories, setCalories] = useState("");
  const [exercise, setExercise] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ steps, calories, exercise, date: new Date().toLocaleString() });
    setSteps("");
    setCalories("");
    setExercise("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="number"
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Workout"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

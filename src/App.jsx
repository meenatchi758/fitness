// src/App.js
import { useState, useEffect, useContext } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Reminder from "./components/Reminder";
import Layout from "./components/Layout";
import { PreferencesContext, PreferencesProvider } from "./context/PreferencesContext";
import "./index.css";

function AppContent() {
  const [workouts, setWorkouts] = useState(() => {
    return JSON.parse(localStorage.getItem("workouts")) || [];
  });

  const { theme, setTheme, unit, setUnit } = useContext(PreferencesContext);

  // Save data automatically
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Layout>
      <h1>🏋️ Fitness Tracker ({unit}, {theme} mode)</h1>
      
      <div className="preferences">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
          Switch Units
        </button>
      </div>

      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
      <Reminder />
    </Layout>
  );
}

export default function App() {
  return (
    <PreferencesProvider>
      <AppContent />
    </PreferencesProvider>
  );
}

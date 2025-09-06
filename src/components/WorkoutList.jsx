// src/components/WorkoutList.js
export default function WorkoutList({ workouts }) {
  return (
    <div className="workout-list">
      <h2>Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts yet.</p>
      ) : (
        <ul>
          {workouts.map((w, i) => (
            <li key={i}>
              <strong>{w.exercise}</strong> - {w.steps} steps, {w.calories} cal
              <br />
              <small>{w.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

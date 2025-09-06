// src/components/Reminder.js
import { useEffect } from "react";

export default function Reminder() {
  useEffect(() => {
    const interval = setInterval(() => {
      alert("⏰ Time to log your activity!");
    }, 3600000); // every 1 hour

    return () => clearInterval(interval);
  }, []);

  return null; // no UI, just reminder
}

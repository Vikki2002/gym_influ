import { motion } from "framer-motion";
import { useState } from "react";

const WorkoutLogging = () => {
    const [workoutData, setWorkoutData] = useState([]);
  
    const handleWorkoutLog = (workout) => {
      // Log workout and track progress
      setWorkoutData([...workoutData, workout]);
    };
  
    return (
      <section className="w-full mt-20 mb-8 px-4">
        <motion.div
          className="max-w-screen-lg mx-auto text-red-600 text-center font-rye font-bold text-4xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Effortless Workout Logging
        </motion.div>
  
        <motion.div
          className="max-w-xl mx-auto text-center text-lg font-normal mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Log workouts and track progress with ease. Just enter the type, sets, reps, and weight.
        </motion.div>
  
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div className="w-full md:w-[45%]">
            <input
              type="text"
              placeholder="Workout Type"
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="number"
              placeholder="Sets"
              className="w-full p-3 rounded-lg border mt-4"
            />
            <input
              type="number"
              placeholder="Reps"
              className="w-full p-3 rounded-lg border mt-4"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              className="w-full p-3 rounded-lg border mt-4"
            />
            <button
              className="w-full mt-4 py-3 bg-red-600 text-white font-bold rounded-lg"
              onClick={() => handleWorkoutLog('Example Workout')}
            >
              Log Workout
            </button>
          </div>
        </div>
  
        <div className="mt-8">
          <h2 className="text-xl text-center font-bold">Logged Workouts</h2>
          <ul className="mt-4">
            {workoutData.map((workout, index) => (
              <li key={index} className="mb-2">
                {workout}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };


  export default WorkoutLogging;
import { motion } from "framer-motion";
import { useState } from "react";

const PersonalizedWorkoutPlans = () => {
    const [workoutPlan, setWorkoutPlan] = useState('');
  
    const generateWorkoutPlan = () => {
      // AI-driven workout customization (simple example)
      setWorkoutPlan('Sample Workout Plan for Goal XYZ');
    };
  
    return (
      <section className="w-full mt-20 mb-8 px-4">
        <motion.div
          className="max-w-screen-lg mx-auto text-red-600 text-center font-rye font-bold text-4xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Personalized Workout Plans
        </motion.div>
  
        <motion.div
          className="max-w-xl mx-auto text-center text-lg font-normal mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          AI-driven workout customization based on your goals.
        </motion.div>
  
        <div className="text-center">
          <button
            onClick={generateWorkoutPlan}
            className="py-3 px-8 bg-red-600 text-white rounded-lg"
          >
            Generate Workout Plan
          </button>
  
          <div className="mt-4">
            <h2 className="text-xl font-bold">Your Workout Plan:</h2>
            <p>{workoutPlan}</p>
          </div>
        </div>
      </section>
    );
  };


  export default PersonalizedWorkoutPlans;
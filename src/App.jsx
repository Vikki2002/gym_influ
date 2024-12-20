import { RouterProvider ,createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import WorkoutPlan from "./Pages/WorkoutPlan";
import DietPlan from "./Pages/DietPlan";
import WorkoutLogging from "./Components/Features/Workout";
import PersonalizedWorkoutPlans from "./Components/Features/PersonalizedPlan";

function App() {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>Error: Page not found</div>,
    },
    {
      path: "/workoutPlan", element: <WorkoutPlan />
    },
    {path: "/DietPlan", element: <DietPlan />},
    {path: "/WorkoutLogging", element: <WorkoutLogging />},
    {path: "/PersonalizedWorkout" , element: <PersonalizedWorkoutPlans />}
  ], {
    future: {
      v7_startTransition: true, // Opt-in to the new behavior
    },
  });
  return <RouterProvider router={appRoute} />;
}

export default App

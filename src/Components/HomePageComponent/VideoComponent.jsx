import fitnessVideo from "../../assets/fitnessVideo.mp4"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the div is in view
  });

  return (
    <motion.div
      ref={ref}
      className="w-[700px] h-[400px] mx-auto mt-[4rem]"
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}} // Animate only if in view
      transition={{ duration: 1 }}
    >
      <video controls width="700" height="400">
        <source src={fitnessVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoComponent;

import workout1 from "../../assets/WorkoutImages/A7pdLQOKkfozfphlzB5zvvzUSbg.jpg.png";
import workout2 from "../../assets/WorkoutImages/KdiY7dNkalDnlUrQOJuxJen0fq4.jpg.png";
import workout3 from "../../assets/WorkoutImages/TGaCkXYXttk4cqQM2LYZqA4ZL3o.jpg.png";
import workout4 from "../../assets/WorkoutImages/WRmaXFrPEq17Lyab8nqbUFOL1O8.jpg.png";
import Image from "../shared/Image";
import { motion } from "framer-motion";
import Text from "../shared/Text";

const imageVariants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.95 },
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const WorkoutImage = () => {
  return (
    <motion.div
      className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={imageVariants} whileHover="hover" whileTap="tap">
        <Image src={workout1} />
        <div className="flex flex-col justify-center items-center gap-4">
            <Text className="text-[24px] text-red-600 font-rye font-bold">Beginner</Text>
            <Text className="text-[18px] font-normal text-center">Start your fitness journey with simple and 
            effective exercises.</Text>
        </div>
      </motion.div>
      <motion.div variants={imageVariants} whileHover="hover" whileTap="tap">
        <Image src={workout2} />
        <div className="flex flex-col justify-center items-center gap-4">
            <Text className="text-[24px] text-red-600 font-rye font-bold">Intermediate</Text>
            <Text className="text-[18px] font-normal text-center">Start your fitness journey with simple and effective exercises.</Text>
        </div>
      </motion.div>
      <motion.div variants={imageVariants} whileHover="hover" whileTap="tap">
        <Image src={workout4} />
        <div className="flex flex-col justify-center items-center gap-4">
            <Text className="text-[24px] text-red-600 font-rye font-bold">Advanced</Text>
            <Text className="text-[18px] font-normal text-center">Push your limits with high-intensity and complex movements.</Text>
        </div>
      </motion.div>
      <motion.div variants={imageVariants} whileHover="hover" whileTap="tap">
        <Image src={workout3} />
        <div className="flex flex-col justify-center items-center gap-4">
            <Text className="text-[24px] text-red-600 font-rye font-bold text-center">Personalized Workout Plan</Text>
            <Text className="text-[18px] font-normal text-center">Create your own workout plan.</Text>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkoutImage;

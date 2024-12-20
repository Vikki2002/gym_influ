import { motion } from "framer-motion";
import Image from "../shared/Image";
import image_1 from "../../assets/GalleryImage/Link.png";
import image_2 from "../../assets/GalleryImage/Link-1.png";
import image_3 from "../../assets/GalleryImage/Link-2.png";
import image_4 from "../../assets/GalleryImage/Link-3.png";
import image_5 from "../../assets/GalleryImage/Link4.png";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ImageGallery() {
  return (
    <motion.section
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 mt-6"
      initial="hidden"
      animate="visible"
    >
      {[image_1, image_2, image_3, image_4, image_5].map((src, index) => (
        <motion.div
          key={index}
          variants={imageVariants}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="overflow-hidden"
        >
          <Image src={src} className="w-full h-auto object-cover" />
        </motion.div>
      ))}
    </motion.section>
  );
}

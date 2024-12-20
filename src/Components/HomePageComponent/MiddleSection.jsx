import { Divider } from "@mui/material";
import Text from "../shared/Text";
import VideoComponent from "./VideoComponent";
import Image from "../shared/Image";
import "../../global.css"
import CarouselImage from "./carouselImage";
import ImageGallery from "./ImageGallary";
import starImage from "../../assets/Vector.png";
import mobileImage from "../../assets/1UO4LCYbX6UQvXFCBXLY0dAOHU.png";
import BenefitsSection from "./OurBenifitSection";
import img_loc_1 from "../../assets/GymLocationImage/LMf0H8b1MNKO0RwpkoYqfCtUaOg.jpeg.png"
import img_loc_2 from "../../assets/GymLocationImage/LsEJrnNgbBAk08pLHwNcDRF4oLo.jpeg.png"
import img_loc_3 from "../../assets/GymLocationImage/W1L5fI4RpqurtydbmGY5crv0ItM.jpg.png"
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import location from "../../assets/GymLocationImage/vt.png"
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

export default function MiddleSection() {
    return (
        <>
            <section className="w-[100vw] mt-[20rem] mb-[2rem]">
                <motion.div 
                    className="max-w-[600px] mx-auto text-red-600 font-rye font-bold text-[5rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Text>Your Fitness.</Text>
                    <Text>Our Mission.</Text>
                </motion.div>
                <motion.div 
                    className="max-w-[700px] mx-auto text-center text-[18px] font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Text variant="p">At GymFluencer, our mission is simple: to provide the tools and support you need to
                        reach your fitness goals. We combine innovative technology with personalized guidance
                        to make fitness easier, more accessible, and more motivating. Join us as we help you </Text>
                    <Text variant="p">transform your fitness journey, one workout at a time.</Text>
                </motion.div>

                <motion.div 
                    className="flex flex-row justify-evenly items-center mt-[30px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <motion.div 
                        className="w-[350px] text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Text variant="text" className="text-[24px] font-roboto font-medium">422k+</Text>
                        <Text variant="p">Workouts logged and progress tracked every month.</Text>
                    </motion.div>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ "bgcolor": "white" }} />
                    <motion.div 
                        className="w-[350px] text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Text variant="text" className="text-[24px] font-roboto font-medium">122k+</Text>
                        <Text variant="p">Workouts logged and progress tracked every month.</Text>
                    </motion.div>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ "bgcolor": "white" }} />
                    <motion.div 
                        className="w-[350px] text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Text variant="text" className="text-[24px] font-roboto font-medium">2+</Text>
                        <Text variant="p">Workouts logged and progress tracked every month.</Text>
                    </motion.div>
                </motion.div>

                <VideoComponent />
                
                <Text className="text-red-600 text-center text-[25px] font-rye font-black mt-14">Our Services</Text>
                <Text className="w-[400px] mx-auto text-center text-[20] font-roboto font-normal">
                    GymFluencer offers 5 essential services to help you
                    achieve your fitness goals with ease and flexibility.
                </Text>
                <ImageGallery />
            </section>
            <section className="mt-6 w-full flex flex-col justify-center items-center gap-5">
                <div className="w-[200px] h-[50px] flex flex-row justify-center items-center gap-2 p-1 mx-auto bg-[#1B1833] rounded-[30px]">
                    <Image src={starImage} />
                    <Text className="font-roboto font-medium text-[20px]">Our Benefits</Text>
                </div>
                <div className="max-w-[70%] mx-auto">
                    <Text className="text-red-600 text-[3rem] font-rye">Discover GymFluencer Benefits</Text>
                    <Text className="text-center font-roboto text-[16px]">Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation</Text>
                </div>
                <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4">
                    <Image src={mobileImage} />
                    <BenefitsSection />
                </div>
            </section>
            <section className="mt-[4rem] w-full bg-image mb-[3rem]">
            </section>
            <div className="w-full h-[45px] bg-red-600 flex flex-row justify-center items-center gap-8">
                <Text className="font-roboto">Fitness Plans  ·  </Text>
                <Text className="font-roboto">Workout Routines  ·  </Text>
                <Text className="font-roboto">Progress Tracking</Text>
            </div>
            <CarouselImage />
            <section className="w-full h-[916px] mt-[1.5rem] p-3">
                <div className="w-[19rem] mx-auto">
                    <Text className="font-rye font-black text-red-600 text-[25px]">
                        Find Your Nearest Gym
                    </Text>
                    <Text className="mt-[1rem] font-normal text-center">
                        Easily discover gyms near your location to kickstart your fitness journey today!
                    </Text>
                </div>
                <div className="bg-[#1B1833] w-[70%] h-[60%] flex flex-row justify-between items-center gap-4 mt-[2rem] mx-auto rounded-[6px] p-2">
                    <section className="flex flex-col justify-center items-start gap-3">
                        <div className="w-[500px] h-[160px] flex flex-row gap-7 bg-slate-800 rounded-[10px] p-4 hover:bg-red-600">
                            <Image src={img_loc_1} className="rounded-[10px]" />
                            <div className="flex flex-col justify-center items-start gap-4">
                                <Text variant="text" className="text-[24px] font-roboto font-bold">Physc Gym Nerul 24/7</Text>
                                <div className="flex flex-row justify-center items-start gap-4">
                                    <AddIcCallIcon />
                                    <Text variant="text">+91 1234567890</Text>
                                </div>
                                <div className="flex flex-row justify-center items-start gap-4">
                                    <AddLocationIcon />
                                    <Text variant="text">Nerul, Navi Mumbai, Maharashtra, 400706</Text>
                                </div>
                            </div>
                        </div>
                        <div className="w-[500px] h-[160px] flex flex-row gap-7 bg-slate-800 rounded-[10px] p-4 hover:bg-red-600">
                            <Image src={img_loc_2} className="rounded-[10px]" />
                            <div className="flex flex-col justify-center items-start gap-4">
                                <Text variant="text" className="text-[24px] font-roboto font-bold">Iron Fitness</Text>
                                <div className="flex flex-row justify-center items-start gap-4">
                                    <AddIcCallIcon />
                                    <Text variant="text">+91 1234567890</Text>
                                </div>
                                <div className="flex flex-row justify-center items-start gap-4">
                                    <AddLocationIcon />
                                    <Text variant="text">Nerul, Navi Mumbai</Text>
                                </div>
                            </div>
                        </div>
                        <div className="w-[500px] h-[160px] flex flex-row gap-7 bg-slate-800 rounded-[10px] p-4 hover:bg-red-600">
                            <Image src={img_loc_3} className="rounded-[10px]" />
                            <div className="flex flex-col justify-center items-start gap-4">
                                <Text variant="text" className="text-[24px] font-roboto font-bold">Hydropower Fitness & Gym</Text>
                                <div className="flex flex-row justify-center items-start gap-4">
                                    <AddIcCallIcon />
                                    <Text variant="text">+91 1234567890</Text>
                                </div>
                                <div className="flex flex-row justify-center items-start gap-4">
                                    <AddLocationIcon />
                                    <Text variant="text">Nerul, Navi Mumbai</Text>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="w-[100%] h-[100%]">
                        <Image src={location} className="w-[100%] h-[100%] object-contain rounded-[5px]" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
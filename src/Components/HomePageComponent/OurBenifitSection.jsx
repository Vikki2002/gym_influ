import image_1 from "../../assets/GalleryImage/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg.png";
import image_2 from "../../assets/GalleryImage/AjjAxBc5v6SZHOkJzG2bwrSMk.svg.png";
import image_3 from "../../assets/GalleryImage/rxSlFR0RyaC3WCayigHX4RPQZs.svg.png";
import image_4 from "../../assets/GalleryImage/u8fjSIAgWQzhagulXkIoN7PzI.svg.png";
import Image from "../shared/Image";
import Text from "../shared/Text";
import { Link } from "react-router-dom";

export default function BenefitsSection() {
    return (
        <div id="benefits-section" className="w-[45vw] grid lg:grid-cols-2 gap-2">
            <div className="w-[426] border-[1px] rounded-[10px] p-3">
                <div className="w-[50px] h-[50px] bg-[#1B1833] rounded-[10px] flex items-center justify-center">
                    <Image src={image_1} />
                </div>
                <Link to="/PersonalizedWorkout"><button className="text-[18px] font-rye font-medium mt-[1.5rem]">Personalized Workout Plans</button></Link>
                <Text className="text-center font-roboto font-normal mt-[1rem]">AI-powered workout plans tailored to
                    your fitness level, goals, and progress.</Text>
            </div>
            <div className="w-[426] h-[226] border-[1px] rounded-[10px] p-5">
                <div className="w-[50px] h-[50px] bg-[#1B1833] rounded-[10px] flex items-center justify-center">
                    <Image src={image_2} />
                </div>
                <Link to="/WorkoutLogging"><button className="text-[18px] font-rye font-medium mt-[1.5rem]">Effortless Workout Logging</button></Link>
                <Text className="text-center font-roboto font-normal mt-[1rem]">Easily log your workouts and monitor
                    your progress over time with our intuitive
                    logging feature.</Text>
            </div>
            <div className="w-[426] h-[226] border-[1px] rounded-[10px] p-5">
                <div className="w-[50px] h-[50px] bg-[#1B1833] rounded-[10px] flex items-center justify-center">
                    <Image src={image_3} />
                </div>
                <button className="text-[18px] font-rye font-medium mt-[1.5rem]">Accurate Rep Counting</button>
                <Text className="text-center font-roboto font-normal mt-[1rem]">Count your reps accurately with our app,
                    ensuring consistency and improved
                    performance.</Text>
            </div>
            <div className="w-[426] h-[226] border-[1px] rounded-[10px] p-5">
                <div className="w-[50px] h-[50px] bg-[#1B1833] rounded-[10px] flex items-center justify-center">
                    <Image src={image_4} />
                </div>
                <button className="text-[18px] font-rye font-medium mt-[1.5rem]">Calorie Calculation & Personalized
                    Diet Plans</button>
                <Text className="text-center font-roboto font-normal mt-[1rem]">Calculate calories burned during
                    workouts and AI-customized meal plans
                    for optimal nutrition and wellness.</Text>
            </div>
        </div>
    )
}
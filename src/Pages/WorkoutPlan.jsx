import logo from "../assets/variant=4.png";

import Navbar from "../Components/NavBar/Navbar"
import Text from "../Components/shared/Text"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import WorkoutImage from "../Components/WorkoutplanComponent/WorkoutImage";
import Image from "../Components/shared/Image";
import Footer from "../Components/Footer/Footer";

const WorkoutPlan = () => {
    return (
        <div className="w-[100vw] h-[100vh]">
            <Navbar />
            <section className="mt-[15rem] flex flex-col justify-center items-center gap-6">
                <Text variant="h1" className="font-rye font-black text-red-500">what is the Workout Plan</Text>
                <Text className="w-[40%] text-center">A workout plan is a structured schedule of exercises designed to help you reach your fitness goals, stay active, and improve your health.</Text>
            </section>
            <section className="mt-[4rem] flex flex-col justify-center items-center gap-8">
                <Text variant="h2" className="text-center font-rye font-black text-[34px] text-red-500">What We Offer:</Text>
                <div className="w-[80%] flex flex-row justify-between items-center mt-[2rem]">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="w-[50px] h-[50px] bg-red-500 rounded-[10px] flex justify-center items-center">
                            <PersonAddAlt1Icon />
                        </div>
                        <Text variant="span" className="text-[14px] font-roboto font-normal">Customized Workout Plans</Text>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="w-[50px] h-[50px] bg-red-500 rounded-[10px] flex justify-center items-center">
                            <PersonAddAlt1Icon />
                        </div>
                        <Text variant="span" className="text-[14px] font-roboto font-normal">Professional Guidance</Text>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="w-[50px] h-[50px] bg-red-500 rounded-[10px] flex justify-center items-center">
                            <PersonAddAlt1Icon />
                        </div>
                        <Text variant="span" className="text-[14px] font-roboto font-normal">Holistic Approach</Text>
                    </div>
                </div>
            </section>
            <section className="w-full mt-[3rem] mb-5 flex flex-col justify-center items-center gap-9">
                <div className="flex flex-col justify-center items-center gap-8">
                    <Text className="text-[36px] text-red-600">Select Your Workout Plan</Text>
                    <Text className="w-[40%] text-center">Choose a workout plan that fits your goals, whether
                        it’s building strength, losing weight, or staying active. Find the perfect plan for you!</Text>
                </div>
                <WorkoutImage />
                <section className="w-[80%] py-2 rounded-[10px] flex flex-row justify-center items-center gap-2  mt-[2rem] bg-[#2A3335]">
                    <div className="w-[40%] flex flex-col justify-center items-start gap-3">
                        <Text className="w-[55%] text-[24px] font-rye font-medium text-red-600">Kickstart Your Fitness Journeywith Gymfluencer</Text>
                        <Text className="w-[85%] text-center">Experience all that GymFluencer has to offer with a free trial. Explore our world-class amenities, personalized diet plans, and professional training programs—absolutely free.</Text>
                        <hr className="w-[90%] h-[1px] bg-[#706c6c] mt-4" />
                        <Image src={logo}/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="flex flex-row justify-center items-center gap-3">
                            <div className="flex flex-col justify-center items-start gap-3">
                                <label id="name">Name</label>
                                <input type="text" id="name" className="p-2 rounded-[5px]" />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-3">
                                <label id="Phone Number">Phone Number</label>
                                <input type="text" id="name" className="p-2 rounded-[5px]" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-3 w-full">
                            <label id="name">Email</label>
                            <input type="Email" id="name" className="p-2 rounded-[5px] w-[80%]" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-3 w-full">
                            <label id="name">Services</label>
                            <input type="text" disabled defaultValue="WorkOut Plan" id="name" className="p-2 rounded-[5px]" />
                        </div>
                        <button className="text-[18px] font-rye bg-red-600 font-medium w-[100%] mt-2">Submit</button>
                    </div>
                </section>
            </section>
            <Footer />
        </div>

    )
}

export default WorkoutPlan;
import GroupAvatars from "../Components/GroupOfAvatar/AvatarGroup";
import MiddleSection from "../Components/HomePageComponent/MiddleSection";
import Navbar from "../Components/NavBar/Navbar";
import Text from "../Components/shared/Text";
import "../global.css";

export default function Home() {
    return (
        <div className="background-image">
            <Navbar />
            <section className="relative top-[150px]">
                {/* Avatar Group */}
                <div className="max-w-[380px] mx-auto h-[60px] bg-[#243642] rounded-[30px]">
                    <GroupAvatars />
                </div>

                {/* Main Content */}
                <div className="mx-auto mt-[5rem] px-4 lg:px-0 max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-center">
                    <Text
                        variant="h1"
                        className="text-[#FB4141] font-rob text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-tight"
                    >
                        Track Your Fitness Journey
                    </Text>
                    <div className="bg-[#243642] p-4 md:p-6 rounded-[15px] mt-[3rem]">
                        <Text
                            variant="p"
                            className="font-normal text-[14px] md:text-[16px] lg:text-[18px]"
                        >
                            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned.
                        </Text>
                        <Text
                            variant="p"
                            className="font-normal mt-2 text-[14px] md:text-[16px] lg:text-[18px]"
                        >
                            Stay motivated and achieve your goals with ease.
                        </Text>
                    </div>
                </div>
            </section>

            {/* Additional Sections */}
            <MiddleSection />
        </div>
    );
}

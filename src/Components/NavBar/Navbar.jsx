import "../../global.css"
import navLogo from "../../assets/variant=4.png";
import Image from "../shared/Image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="fixed top-5 z-50 w-full lg:h-[90px] md:h-[60px]">
            <div className="lg:max-w-5xl md:max-w-2xl max-w-[400px]  mx-auto flex justify-between items-center px-4 py-4 bg-[#243642] rounded-[30px]">
                <Image src={navLogo} className="h-[40px]"/>
                <button
                    className="text-white lg:hidden"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
                <div className="lg:flex md:hidden hidden flex-row justify-center items-center gap-4">
                    <Link to="/" className="text-[18px] text-white font-rye font-medium">Home</Link>
                    <Link className="text-[18px] text-white font-rye font-medium">About</Link>
                    <div className="menu group relative">
                        <Link className="text-[18px] text-white font-rye font-medium">Our Services</Link>
                        <KeyboardArrowDownIcon />
                        <div className="absolute w-[159px] hidden group-hover:block bg-[#243642] text-black p-4 rounded shadow-lg">
                            <Link to="/workoutPlan" className="block text-[16px] text-white font-rye font-medium"> Workout Plan</Link>
                            <Link to="/DietPlan" className="block text-[16px] text-white font-rye font-medium">Diet Plan</Link>
                        </div>
                    </div>
                    <a href="#benefits-section" className="text-[18px] text-white font-rye font-medium">Benefits</a>
                    <Link className="text-[18px] text-white font-rye font-medium">Blogs</Link>
                    <Link className="text-[18px] text-white font-rye font-medium">Contact</Link>
                </div>
                <button className="lg:block hidden text-[18px] font-rye bg-red-600 font-medium">Join Us now</button>
            </div>
        </nav>
    )
}
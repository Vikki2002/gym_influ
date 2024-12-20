import footerLogo from "../../assets/variant=4.png";
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import Image from "../shared/Image";
import Text from "../shared/Text";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Footer() {
    return (
        <motion.footer 
            className="w-full flex flex-col justify-center items-center gap-5 mb-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Image src={footerLogo} />
            <Text className="w-80px text-[24px] font-semibold font-roboto">Where Fitness Meets Social Connection!</Text>
            <div className="w-[350px] h-[50px] p-1 bg-[#1B1833] flex flex-row justify-center items-center gap-4 rounded-[5px]">
                <MailIcon />
                <Text>hello@gym.com</Text>
            </div>
            <Stack direction="row" spacing={5}>
                <Link className="text-[18px] text-white font-rye font-medium">Home</Link>
                <Link className="text-[18px] text-white font-rye font-medium">Diet Plan</Link>
                <Link className="text-[18px] text-white font-rye font-medium">Feature</Link>
                <Link className="text-[18px] text-white font-rye font-medium">FRQ&apos;S</Link>
            </Stack>
            {/* <hr style="border: none; height: 1px; background-color: #ccc;"></hr> */}
            <hr className="w-[90%] h-[1px] mx-auto bg-[#ccc]"/>
            <div className="w-[90%] flex flex-row justify-between items-center">
                <Text>© 2024 GymFluencer. All rights reserved.</Text>
                <div className="flex flex-row justify-center items-center gap-4">
                    <LinkedInIcon />
                    <XIcon />
                    <InstagramIcon />
                </div>
            </div>
        </motion.footer>
    )
}
import { useState, useEffect } from "react";
import Image from "../shared/Image";
import { Rating } from "@mui/material";
import image_1 from "../../assets/CarouselImage/2xpZXjM4AhwduCRhoAnVxztrfIk.jpg.png";
import image_2 from "../../assets/CarouselImage/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg.png";

const images = [
    { src: image_1, rating: 5 },
    { src: image_2, rating: 5 },
];

export default function CarouselImage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[400px] mt-[2rem] flex justify-center items-center">
            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full"
            >
                Prev
            </button>

            {/* Current Slide */}
            <div className="w-[500px] h-[200px] flex flex-row gap-7 bg-slate-800 rounded-[10px] p-4">
                <Image src={images[currentIndex].src} className="rounded-[10px]" />
                <Rating
                    name="simple-controlled"
                    value={images[currentIndex].rating}
                    sx={{ color: "red", marginTop: "3rem" }}
                />
            </div>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full"
            >
                Next
            </button>
        </div>
    );
}

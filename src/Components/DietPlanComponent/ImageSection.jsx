import Diet_1 from "../../assets/DietPlanImages/6Bo9XiT9HJgwRtgFgrPmBzEb4o4.jpg.png";
import Diet_2 from "../../assets/DietPlanImages/bZdCqQJYcC74p5C1N0iGwKZMIlM.jpg.png";
import Diet_3 from "../../assets/DietPlanImages/g0b3NYxbvDh2vkvdsHJGWy3las.jpg.png";
import Diet_4 from "../../assets/DietPlanImages/JBzr01cFcFWM0J3V9LoyEVjTW3Y.jpg.png";
import Diet_5 from "../../assets/DietPlanImages/NpOWFWsntxZHvwPMVFmsU8F7TuQ.jpg.png";
import Diet_6 from "../../assets/DietPlanImages/pqheJkNvmapsynmUIqZdlRZJFh4.jpg.png";
import Diet_7 from "../../assets/DietPlanImages/Q1cecyrrVPVIhRXgi0lUHDfpjg.jpg.png";
import Diet_8 from "../../assets/DietPlanImages/toVnd61YpKyj2OU8K7jwv9iaCk.jpg.png";
import Diet_9 from "../../assets/DietPlanImages/TzaHy2QyUCj51w6LYUB7jevHCA.jpg.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Text from "../shared/Text";

export default function TitlebarBelowImageList() {
    const itemData = [
        {
            img: Diet_1,
            title: "Endurance/Performance Diet Plan",
            description: "A description of the Endurance/Performance Diet Plan.",
        },
        {
            img: Diet_2,
            title: "Personalized Diet Plan",
            description: "A description of the Personalized Diet Plan.",
        },
        {
            img: Diet_3,
            title: "Cutting Diet Plan",
            description: "A description of the Cutting Diet Plan",
        },
        {
            img: Diet_4,
            title: "Keto Diet (Ketogenic)",
            description: "A description of the Keto Diet (Ketogenic).",
        },
        {
            img: Diet_5,
            title: "Vegetarian/Vegan Diet Plan",
            description: "A description of the Vegetarian/Vegan Diet Plan.",
        },
        {
            img: Diet_6,
            title: "Muscle Building (Hypertrophy) Diet Plan",
            description: "A description of the Muscle Building (Hypertrophy) Diet Plan.",
        },
        {
            img: Diet_7,
            title: "Weight Loss Diet Plan",
            description: "A description of the Weight Loss (Fat Loss) Diet Plan.",
        },
        {
            img: Diet_8,
            title: "Paleo Diet Plan",
            description: "A description of the Paleo Diet Plan.",
        },
        {
            img: Diet_9,
            title: "Intermittent Fasting Diet Plan",
            description: "A description of the Intermittent Fasting Diet Plan.",
        },
    ];

    return (
        <ImageList sx={{ width: "60vw", height: 550, borderRadius: "5px" }}>
            {itemData.map((item) => (
                <ImageListItem
                    key={item.img}
                    className="group transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                    <img
                        src={item.img}
                        srcSet={`${item.img} 2x`}
                        alt={item.title}
                        loading="lazy"
                        className="rounded-md"
                    />
                    <ImageListItemBar
                        title={<Text className="font-rye text-red-600 text-[20px]">{item.title}</Text>}
                        subtitle={<span className="font-roboto">{item.description}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

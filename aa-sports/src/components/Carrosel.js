import React, { useState, useEffect } from "react";
import "./Carrosel.css";
import slide1 from "../assets/icons/banner/1367_desk_full_campanha_payday.gif";
import slide2 from "../assets/icons/banner/1367_desk_full_campanha_payday.gif";
import slide3 from "../assets/icons/banner/1367_desk_full_campanha_payday.gif";

const images = [slide1, slide2, slide3];

export default function Carousel() {
const [index, setIndex] = useState(0);
useEffect(() => {
    const timer = setTimeout(() => {
    setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
}, [index]);
return (
    <div className="carousel">
    <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="carousel-image"
    />
    <div className="dots">
        {images.map((_, i) => (
        <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
        />
        ))}
    </div>
    </div>
);
}

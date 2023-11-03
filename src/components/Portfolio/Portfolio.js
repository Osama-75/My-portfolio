import { useRef } from "react";
import { Work } from "../../data/WorkExp";
import Card from "./Card/Card";
import "./Portfolio.scss"
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
    const ref = useRef(null);

    const slideLeft = () => {
        var slider = document.getElementById('portfolio-box');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('portfolio-box');
        slider.scrollLeft = slider.scrollLeft + 500;
    }; 

    return (
            <div ref={ref} className="portfolio-page">
                <FontAwesomeIcon 
                    onClick={slideLeft}
                    className="arrow-left" 
                    icon={faCircleArrowLeft} 
                />
                <div className="proj-zone" id="portfolio-box" >
                    {Work.map((d) => (
                        <Card key={d.id} data={d} />
                    ))}
                </div>
                <FontAwesomeIcon 
                    onClick={slideRight}
                    className="arrow-right" 
                    icon={faCircleArrowRight} 
                />
            </div>
    )
}
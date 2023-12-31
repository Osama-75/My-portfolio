import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import './About.scss'

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Expert in Front-end development including technologies like
                        <span style={{color:"#ffd700", margin: "5Px"}} >
                        HTML5, CSS3, Javascript, Typescript, React, Redux, Redux Toolkit, Next Js, Angular,
                        </span>
                        etc...
                    </p>
                    <p align="LEFT">
                        I'm not a designer but i have a good sense of aesthetics, and experience in responsive,
                        mobil-first web design. I put special effort into optiming my code and providing the 
                        best user experience.
                    </p>
                    <p>
                        I have Bachelor's degree, Engineering and 2+ years of experience in front-end 
                        development as a freelancer.
                    </p>
                    <a
                        href="https://1drv.ms/b/s!Au50E0-gfzDNaYNZ2vB2E3uZ1-c?e=QkLzi0"
                        target="_blank"
                        rel="noreferrer"
                        className="flat-button"
                    >
                        Show My CV
                    </a>
                </div>
                <div className="about-right">
                    <div className="about-skill">
                        <div className="">
                            <img src= {require("../../assets/images/javascript.png")}  alt=""/>
                        </div>
                        <div className="">
                            <img src= {require("../../assets/images/ts.png")}  alt=""/>
                        </div>
                        <div className="">
                            <img src= {require("../../assets/images/next.png")}  alt=""/>
                        </div>
                        <div className="">
                            <img src= {require("../../assets/images/react.png")}  alt=""/>
                        </div>
                        <div className="">
                            <img src= {require("../../assets/images/css.png")}  alt=""/>
                        </div>
                        <div className="">
                            <img src= {require("../../assets/images/logo4.png")}  alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
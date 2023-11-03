import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons';
import "./Skills.scss"

export default function Skills() {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
        <div className="skills-page">
            <div className="skill-text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's']}
                        idx={15}
                    />
                </h1>
                <div className="skills-details" >
                        <h2>Html5</h2>
                        <h2>Css3</h2>
                        <h2>JavaScript</h2>
                        <h2>sass</h2>
                        <h2>Material UI</h2>
                        <h2>Bootstrap</h2>
                        <h2>Tailwind</h2>
                        <h2>React</h2>
                        <h2>Redux</h2>
                        <h2>Redux Toolkit</h2>
                        <h2>NextJs</h2>
                        <h2>Typescript</h2>
                        <h2>Angular</h2>
                        <h2>NgRx</h2>
                        <h2>RxJs</h2>
                        <h2>Git</h2>
                        <h2>Photoshop</h2>
                </div>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
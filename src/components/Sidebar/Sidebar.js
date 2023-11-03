import { useState } from 'react';
import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoO from '../../assets/images/logo-o.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faSuitcase, faBars, faClose, faStar,} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faFacebook, faWhatsapp,} from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
    const [showNav, setShowNav] = useState(false);
    return(
        
        <div className="nav-bar">
            <Link className="logo" to="/"  onClick={() => setShowNav(false)}>
                <img src={LogoO} alt="Logo" />
                <p className="sub-logo" > Osama </p>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="skill-link" to="/skills"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faStar} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' 
                />
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/osama-nasser-a24959283/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Osama-75?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://web.facebook.com/profile.php?id=100012647887657"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" className="-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+201095132663" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" className="anchor-icon" />
                        </a>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/osama-nasser-a24959283/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Osama-75?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://web.facebook.com/profile.php?id=100012647887657"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" className="-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+201095132663" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' 
            />
        </div>
    )
}
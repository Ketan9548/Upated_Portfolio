import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { Link } from "react-router-dom";
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const imge = <FontAwesomeIcon icon={faDiagramProject} />;

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                <h1 className="about_me">
                    <AnimatedLetters letterClass={letterClass} strArray={"List".split("")} idx={10} />
                </h1>
                <h1 className="h1_edit">
                    <div className="p_tab">
                        <p
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="https://food-del-frontend-o5sl.onrender.com/" style={{
                                color: 'yellow',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                borderRadius: '5px'
                            }} target="_blank">
                                <h3>Project1</h3>
                            </Link>
                        </p>
                        <p>{hoveredIndex === 1 && imge}</p>
                    </div>
                    <div className="p_tab">
                        <p
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="https://react-practies-password-gerator2.onrender.com/" style={{
                                color: 'yellow',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                borderRadius: '5px'
                            }} target="_blank">
                                <h3>Project2</h3>
                            </Link>
                        </p>
                        <p>{hoveredIndex === 2 && imge}</p>
                    </div>
                    <div className="p_tab">
                        <p
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="https://github.com/Ketan9548?tab=repositories" style={{
                                color: 'yellow',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                borderRadius: '5px'
                            }} target="_blank">
                                <h3>More...</h3>
                            </Link>
                        </p>
                        <p>{hoveredIndex === 3 && imge}</p>
                    </div>
                </h1>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Projects;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight
} from "@fortawesome/free-solid-svg-icons";

import { proyectos } from "../assets/data";
import { useState, useEffect, useRef } from "react";

import "./carrusel.css";

export const Carrusel = () => {

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

        if(imgNode) {
            imgNode.scrollIntoView({
                behavios: "smooth"
            });
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        event.preventDefault();
        if(direction == 'prev') {
            setCurrentIndex(curr => {
                const isFirsSlide = currentIndex === 0;
                return  isFirsSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === proyectos.length - 1;
            if(!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        event.preventDefault();
        setCurrentIndex(slideIndex);
    }

    return <div className="main-container">
        <div className="slider-container">
            
            <div className="leftArrow" onClick={() => scrollToImage('prev')}>
                <FontAwesomeIcon icon={faCircleChevronLeft} style={{color: "#ff00bb",}} />
            </div>

            <div className="rightArrow" onClick={() => scrollToImage('next')}>
            <FontAwesomeIcon icon={faCircleChevronRight} style={{color: "#ff00bb",}} />
            </div>

            <div className="container-images">
                <ul ref={listRef}>
                    {
                        proyectos.map((item) => {
                            return <li key={item.id} style={{ display: "block" }}>
                                <img className="imag" src={item.image} />
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="dots-container">
                {
                    proyectos.map((_, idx) => (
                        <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(idx)}>
                            &#9865;
                        </div>))
                }
            </div>
        </div>
    </div>
};
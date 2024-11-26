import React from "react";
import { FaCopyright } from "react-icons/fa";
import { TbDeviceImacStar } from "react-icons/tb";
import "./footer.css";

export const FooterHome = () => {
    return (
        <section className="footer_page">
            <div className="footer_page-contain">
                <p className="footer_text">
                    <FaCopyright size="20" color="#8a2be2" /> 2024 Creado por 
                    <strong className="footer_text-strong"><TbDeviceImacStar size="20" color="#8a2be2" /> PaolaOtamendi.Dev</strong>
                </p>
            </div>
        </section>
    );
};

import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import {
  FaLaptopCode,
  FaHome,
  FaUserAstronaut,
  FaFolderOpen,
  FaTools,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import "./nav.css";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navBar sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/10 backdrop-blur-sm" : "bg-black/10"
      }`}
    >
      <div className="contain_intro-name">
        <p className="intro_name-nav">
          OtamendiDev<span className="colored-dot">.</span>
        </p>
      </div>

      {/* Menú para desktop */}
      <div className="intro_name-links hidden lg:flex">
        <Link to="/" className="nav-text p-2 m-2">
          Home
          <FaHome size="20" color="#8a2be2" />
        </Link>
        <Scrollspy
          items={["home", "resumen", "stack"]}
          currentClassName="is-current"
          offset={-100}
          className="scroll_navbar"
        >
          <a href="#home" className="nav-text p-2 m-2">
            About
            <FaLaptopCode size="20" color="#8a2be2" />
          </a>
          <a href="#resumen" className="nav-text p-2 m-2">
            Resumén
            <FaUserAstronaut size="20" color="#8a2be2" />
          </a>
          <a href="#stack" className="nav-text p-2 m-2">
            Stack
            <FaTools size="20" color="#8a2be2" />
          </a>
        </Scrollspy>
        <Link to="/Proyectos" className="nav-text p-2 m-2">
          Proyectos
          <FaFolderOpen size="20" color="#8a2be2" />
        </Link>
      </div>

      {/* Menú para mobile */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="menu-button lg:hidden">
          <IoMenu size="20" color="#8a2be2" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="mobile-menu p-4 rounded-lg shadow-lg dropdown-enter dropdown-exit"
            sideOffset={5}
          >
            <motion-div></motion-div>
            <DropdownMenu.Item>
              <Link to="/" className="nav-text m-2">
                <FaHome size="20" color="#8a2be2" />
                Home
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <a href="#home" className="nav-text m-2">
                <FaLaptopCode size="20" color="#8a2be2" />
                About
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <a href="#resumen" className="nav-text m-2">
                <FaUserAstronaut size="20" color="#8a2be2" />
                Resumén
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <a href="#stack" className="nav-text m-2">
                <FaTools size="20" color="#8a2be2" />
                Stack
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link to="/Proyectos" className="nav-text m-2">
                <FaFolderOpen size="20" color="#8a2be2" />
                Proyectos
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

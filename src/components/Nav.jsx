import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
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
import { Fragment } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import "./nav.css";

export const Navbar = () => {
  return (
    <div className="navBar sticky top-0 bg-black bg-opacity-10 w-full z-50">
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
      {/* <Menu as="div" className="relative lg:hidden">
        <MenuButton className="menu-button">
        <IoMenu size="20" color="#8a2be2" />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            className="mobile-menu bg-gray-800 p-4 rounded-lg shadow-lg"
            anchor="bottom"
          >
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/"
                  className={`nav-text m-2 ${active ? "bg-blue-500" : ""}`}
                >
                  <FaHome size="20" color="#8a2be2" />
                  Home
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#home"
                  className={`nav-text m-2 ${active ? "bg-blue-500" : ""}`}
                >
                  <FaLaptopCode size="20" color="#8a2be2" />
                  About
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#resumen"
                  className={`nav-text m-2 ${active ? "bg-blue-500" : ""}`}
                >
                  <FaUserAstronaut size="20" color="#8a2be2" />
                  Resumen
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#stack"
                  className={`nav-text m-2 ${active ? "bg-blue-500" : ""}`}
                >
                  <FaTools size="20" color="#8a2be2" />
                  Stack
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/Proyectos"
                  className={`nav-text m-2 ${active ? "bg-blue-500" : ""}`}
                >
                  <FaFolderOpen size="20" color="#8a2be2" />
                  Proyectos
                </Link>
              )}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu> */}

      {/* Prueba con radix */}
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

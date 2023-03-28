import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer} from "@mui/material";
// @ts-ignore
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>();

    return (
        <nav className={"flex w-full p-5 justify-between shadow-xl bg-white bg-white"}>
            <h1 className={"text-5xl font-extrabold"}>Matej.</h1>
            <div>
                <Drawer
                    anchor={"top"}
                    open={isOpenDrawer}
                    onClose={() => setIsOpenDrawer(false)}>
                    <Link smooth={true} className={"link-navbar-drawer"} to="sectionLandingPage">Home</Link>
                    <Link smooth={true} className={"link-navbar-drawer"} to="sectionAboutMe">About</Link>
                    <Link smooth={true} className={"link-navbar-drawer"} to="sectionSkills">Skills</Link>
                    <Link smooth={true} className={"link-navbar-drawer text-primary-color bg-secondary-color"} to="sectionContactMe">Contact</Link>
                </Drawer>
                <MenuIcon
                    onClick={() => setIsOpenDrawer(true)}
                    className={"md:hidden text-5xl"}
                />
                <ul className={"hidden md:flex gap-6"}>
                    <li>
                        <Link smooth={true} className={"link-navbar"} to="sectionLandingPage">Home</Link>
                    </li>
                    <li>
                        <Link smooth={true} className={"link-navbar"} to="sectionAboutMe">About</Link>
                    </li>
                    <li>
                        <Link smooth={true} className={"link-navbar"} to="sectionSkills">Skills</Link>
                    </li>
                    <li>
                        <Link smooth={true} className={"text-3xl hover:cursor-pointer font-bold bg-secondary-color hover:bg-cyan-900 text-primary-color p-2 rounded-lg"} to="sectionContactMe">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
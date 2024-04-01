import {useState} from 'react';
//import MenuIcon from '@mui/icons-material/Menu';
// @ts-ignore
import MenuIcon from "../assets/menu-icon.png"
import {Drawer} from "@mui/material";
// @ts-ignore
import { Link } from 'react-scroll';

function Navbar() {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    return (
        <nav className={"flex w-full p-5 justify-between shadow-xl bg-white"}>
            <h1 className={"text-4xl font-extrabold"}>Matej.</h1>
                <Drawer
                    anchor={"top"}
                    open={isOpenDrawer}
                    onClose={() => setIsOpenDrawer(false)}>
                    <Link smooth={true} className={"link-navbar-drawer"} to="sectionLandingPage">Home</Link>
                    <Link smooth={true} className={"link-navbar-drawer"} to="sectionAboutMe">About</Link>
                    <Link smooth={true} className={"link-navbar-drawer"} to="sectionSkills">Skills</Link>
                    <Link smooth={true} className={"link-navbar-drawer text-primary-color bg-secondary-color"} to="sectionContactMe">Contact</Link>
                </Drawer>
                <img
                    onClick={() => setIsOpenDrawer(true)}
                    className={"md:hidden absolute top-6 right-5 w-10"}
                    src={MenuIcon}
                 alt="MenuIcon"/>
                <ul className={"hidden md:flex gap-6 items-center"}>
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
                        <Link smooth={true} className={"text-2xl hover:cursor-pointer font-bold bg-secondary-color hover:bg-cyan-900 text-primary-color p-2 rounded-lg"} to="sectionContactMe">Contact</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;
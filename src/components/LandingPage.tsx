import React from 'react';
import {Grid} from "@mui/material";
import PopUpButton from "./UI/PopUpButton";
// @ts-ignore
import LinkedInImage from "../assets/icons8-linkedin-60.png";
// @ts-ignore
import GithubImage from "../assets/icons8-github-60.png";

const MAIN_TEXT = "I’m Matej Kuka";
const SECONDARY_TEXT = "Fullstack developer using his passion for innovation, start-ups and entrepreneurship";
const TERCIARY_TEXT = "Currently based in Bratislava, Slovakia";

function LandingPage() {
    return (
        <div id="sectionLandingPage" className={"w-full bg-cusom-gradient-small md:bg-custom-gradient relative"}>
            <div className={"w-full h-[80vh] md:h-[90vh] pt-8 md:flex items-center bg-statue-small md:bg-statue-md"}>
                <Grid container className={"h-[20rem]"}>
                    <Grid sm={7} item className={"sm:pr-4 pl-4 sm:pl-16"}>
                        <h1 className={"text-[2.4rem] sm:text-6xl lg:text-[6rem] font-extrabold text-gray-800"}>{MAIN_TEXT}</h1>
                        <h2 className={"text-[1.2rem] sm:text-2xl lg:text-4xl pr-28 font-extrabold py-4 text-gray-900 pr-14"}>{SECONDARY_TEXT}</h2>
                        <h3 className={"text-[1rem] sm:text-2xl lg:text-3xl font-bold text-gray-900"}>{TERCIARY_TEXT}</h3>
                    </Grid>
                    <Grid sm={5} item>
                    </Grid>
                </Grid>
            </div>
            <PopUpButton
                className={"hover:bg-cyan-600 absolute top-[63%] md:top-4 right-4 rounded-xl"}
                iconPath={LinkedInImage}
                linkPath={"https://www.linkedin.com/in/matej-kuka-126a691b9/"}/>
            <PopUpButton
                className={"hover:bg-cyan-600 absolute top-[50%] md:top-20 right-4 rounded-xl"}
                iconPath={GithubImage}
                linkPath={"https://github.com/MatejKuka"}/>
        </div>
    );
}

export default LandingPage;
import React from 'react';
import {Grid} from "@mui/material";
// @ts-ignore
import {Link} from 'react-scroll';
// @ts-ignore
import LinkedInImage from '../assets/icons8-linkedin-60.png';
// @ts-ignore
import MailImage from "../assets/icons8-mail-48.png";
// @ts-ignore
import DownloadImage from '../assets/icons8-download-48.png';
// @ts-ignore
import MyPhoto from "../assets/myphoto-bg.png";
// @ts-ignore
import MyCVFile from "../assets/Matej_Kuka_ENCV.pdf"

const ABOUT_ME_TEXT = [
    "My education is in Computer science - Software Development but I am a mostly self-taught developer with an entrepreneurial spirit. My proficiency is in web application development and full-stack development is my preferred choice. ",
    //"It is not just an obsession I have developed during my journey, but it is more the approach I have and can offer.",
    "I enjoy working in startup and innovation environments, as these are the settings where I thrive on.",
    "In my leisure time, I listen to all kinds of podcasts (about technology, politics or philosophy for example), read books or just exploring some local places.",
    "In 2021, I decided to read 20 pages each day and at the end of the year, I read about 21 books. What a year...",
    "Originally, I am from Slovakia and as you could notice, I have a weakness for art, especially for Ancient Greek statues.",
]

const CALL_TO_ACTION_TEXT = "If you want to know more about me or my experiences, you can download my CV, check my LinkedIn profile or contact me directly.";

const MY_LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/matej-kuka-126a691b9/";

function AboutMeSection() {
    return (
        <div className={"p-10"} id="sectionAboutMe">
            <h1 className={"title-section"}>About me</h1>
            <Grid container className={"max-w-[1400px] mx-auto"}>
                <Grid lg={5} item className={"w-full"}>
                    <img
                        className={"mx-auto"}
                        alt={"Matej Kuka"}
                        src={MyPhoto}
                    />
                </Grid>
                <Grid lg={7} item className={"px-4"}>
                    {ABOUT_ME_TEXT.map(text => (
                        <p
                            key={text}
                            className={"md:text-2xl my-4 text-xl"}>
                            {text}
                        </p>
                    ))}
                </Grid>
            </Grid>
            <p className={"md:text-2xl text-xl font-bold text-center my-8 max-w-[850px] mx-auto"}>{CALL_TO_ACTION_TEXT}</p>
            <div className={"mx-auto max-w-[1300px]"}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <a className={"button-aboutme-action"}
                           href={MyCVFile}
                           target="_blank"
                           rel="noopener noreferrer">Download CV
                            <img src={DownloadImage} className={"h-[40px] pl-1 inline"} alt={"df"}/>
                        </a>
                    </Grid>
                    <Grid item md={4}>
                        <a className={"button-aboutme-action"}
                           href={MY_LINKEDIN_PROFILE_URL}
                           target="_blank"
                           rel="noopener noreferrer">
                            LinkedIn
                            <img src={LinkedInImage} className={"h-[40px] pl-1 inline"} alt={"ds"}/>
                        </a>
                    </Grid>
                    <Grid item md={4}>
                        <Link
                            smooth={true}
                            className={"button-aboutme-action"}
                            to="sectionContactMe">
                            Contact me
                            <img src={MailImage} className={"h-[40px] pl-1 inline"} alt={"sdfaf"}/>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default AboutMeSection;
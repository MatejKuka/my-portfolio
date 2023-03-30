import React from 'react';
import {Grid} from "@mui/material";

const MY_SKILLS_TITLE = "Web development";
const MY_TECHNOLOGIES_TITLE = "Technologies I have been using";
const MY_METHODOLOGIES_TITLE = "Additional skills";

const MY_SKILLS_LIST = [
    "React.js, Next.js",
    "Node.js, Express.js",
    "TypeScript",
    "Tailwind, SASS",
    "GraphQL + Apollo",
    "HTML5, CSS, JS",
]
const MY_TECHNOLOGIES_LIST = [
    "Git, Github (version control)",
    "Testing / e2e testing",
    "DevOps, Github Actions, Jenkins",
    "Firebase",
    "Docker, Kubernetes"
]

const MY_METHODOLOGIES_LIST = [
    "SCRUM (Agile), Test-Driven Development, Extreme Programming",
    "Figma",
    "Vue.js, .NET, C#, Java",
    "MongoDB, MySQL, PostgreSQL"
]

function SkillsSection() {
    return (
        <div id="sectionSkills" className={"max-w-[1300px] mx-auto p-2"}>
            <h1 className={"title-section"}>My technical skills</h1>
            <Grid container className={"mx-auto w-full text-center"}>
                <Grid item md={6} className={"w-full"}>
                    <h2 className={"title-skills-section"}>{MY_SKILLS_TITLE}:</h2>
                    <ul>
                        {MY_SKILLS_LIST.map(skill => (
                            <li className={"md:text-3xl text-2xl py-1"} key={skill}>- {skill}</li>
                        ))}
                    </ul>
                </Grid>
                <Grid item md={6} className={"w-full"}>
                    <h2 className={"title-skills-section w-full text-center"}>{MY_TECHNOLOGIES_TITLE}:</h2>
                    <ul>
                        {MY_TECHNOLOGIES_LIST.map(skill => (
                            <li className={"md:text-3xl text-2xl py-1"} key={skill}>- {skill}</li>
                        ))}
                    </ul>
                    <h2 className={"title-skills-section mt-7"}>{MY_METHODOLOGIES_TITLE}:</h2>
                    <ul>
                        {MY_METHODOLOGIES_LIST.map(skill => (
                            <li className={"md:text-3xl text-2xl py-1"} key={skill}>- {skill}</li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default SkillsSection;
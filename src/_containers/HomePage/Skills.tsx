import { FC, useCallback } from "react";
import Top from "../../_components/Top";

const familiarTechs = [
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "Bootstrap",
    "Javascript ",
    "Typescript",
    "React",
    "Redux",
    "RTK",
    "Firebase",
    "Git",
    "Gulp",
    "Figma",
];

const futureTechs = ["Node.js", "Docker", "Webpack", "React Native"];

const Skills: FC = () => {
    const familiarItems = useCallback(
        (data: string[]) =>
            data.map((item, i) => (
                <li key={item + i} className="skills__item">
                    {item}
                </li>
            )),
        [familiarTechs, futureTechs]
    );

    return (
        <section className="skills">
            <div className="skills__container">
                <Top className="skills__top" title="Skills" />
                <div className="skills__body">
                    <div className="skills__column">
                        <h4 className="skills__subtitle">Technologies and Tools I&apos;m familiar with.</h4>
                        <ul className="skills__list">{familiarItems(familiarTechs)}</ul>
                    </div>
                    <div className="skills__column">
                        <h4 className="skills__subtitle">I&apos;m focused on learning:</h4>
                        <ul className="skills__list">{familiarItems(futureTechs)}</ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import { FC } from "react";
import Top from "../../_components/Top";
import { useInView } from "react-intersection-observer";

const programmingTechs = ["HTML", "CSS", "SASS", "JavaScript", "TypeScript"];
const frameworksTechs = ["React", "Redux", "Redux Toolkit", "Tailwind", "Bootstrap"];
const toolsTechs = ["Git", "Firebase", "Gulp", "Figma"];
const futureTechs = ["Node.js", "Next.js", "Docker", "Webpack", "React Native"];

const familiarItems = (label: string, data: string[]) => (
    <div className="skills__row">
        <h4 className="skills__label">{label}:</h4>
        <ul className="skills__list">
            {data.map((item, i) => (
                <li key={item + i} className="skills__item">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Skills: FC = () => {
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, delay: 500 });

    return (
        <section className={`skills ${inView ? "_inView" : ""}`}>
            <div ref={ref} className="skills__container">
                <Top className="skills__top" title="Skills" />
                <div className="skills__body">
                    {familiarItems("Programming Languages", programmingTechs)}
                    {familiarItems("Libraries & Frameworks", frameworksTechs)}
                    {familiarItems("Tools & Platforms", toolsTechs)}
                    {familiarItems("I'm focused on learning", futureTechs)}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import { FC } from "react";
import Top from "../../_components/Top";
import { useInView } from "react-intersection-observer";

const programming = ["HTML", "CSS", "SASS", "JavaScript (ES6)", "TypeScript"];
const libraries = ["React", "Redux", "Redux Toolkit", "Node.js", "Tailwind", "Bootstrap", "JQuery"];
const version = ["Git", "GitHub", "GitLab"];
const tools = ["Firebase", "Vercel", "Heroku", "Gulp"];
const IDE = ["VSCode", "SublimeText"];
const compilers = ["Webpack", "ESBuild"];
const design = ["Figma", "Marsy"];
const futureTechs = ["MongoDB", "Express.js", "Postman", "Next.js", "Docker", "React Native"];

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
                    {familiarItems("Programming Languages", programming)}
                    {familiarItems("Libraries & Frameworks", libraries)}
                    {familiarItems("Version control systems", version)}
                    {familiarItems("Tools & Platforms", tools)}
                    {familiarItems("IDE", IDE)}
                    {familiarItems("Compilers", compilers)}
                    {familiarItems("Design", design)}
                    {familiarItems("I'm focused on learning", futureTechs)}
                </div>
            </div>
        </section>
    );
};

export default Skills;

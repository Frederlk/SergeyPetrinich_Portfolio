import { FC } from "react";
import Top from "../../_components/Top";
import { useInView } from "react-intersection-observer";
import {
    animationsVisualEffects,
    authenticationSecurity,
    buildPackageManagement,
    cloudDeployment,
    contentManagementSystems,
    databasesORMs,
    dataFetchingApiTools,
    dataValidation,
    designTools,
    frameworksLibraries,
    internationalization,
    markupLanguages,
    paymentProcessing,
    programmingLanguages,
    runtimeServers,
    stateFormManagement,
    testingCodeQuality,
    versionControlCiCd,
} from "../../constants/skills";

const familiarItems = (label: string, data: string[]) => (
    <div className="skills__row">
        <ul className="skills__list">
            <li className="skills__label">{label}:</li>
            {data.map((item, i) => (
                <li key={item + i} className="skills__item">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Skills: FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        delay: 500,
    });

    return (
        <section className={`skills ${inView ? "_inView" : ""}`}>
            <div ref={ref} className="skills__container">
                <Top className="skills__top" title="Skills" />
                <div className="skills__body">
                    {familiarItems("Markup & Templating Languages", markupLanguages)}
                    {familiarItems("Programming Languages", programmingLanguages)}
                    {familiarItems("Frameworks & Libraries", frameworksLibraries)}
                    {familiarItems("Animations & Visual Effects", animationsVisualEffects)}
                    {familiarItems("State & Form Management", stateFormManagement)}
                    {familiarItems("Data Validation", dataValidation)}
                    {familiarItems("Data Fetching & API Tools", dataFetchingApiTools)}
                    {familiarItems("Internationalization", internationalization)}
                    {familiarItems("Runtime & Servers", runtimeServers)}
                    {familiarItems("Databases & ORMs", databasesORMs)}
                    {familiarItems("Authentication & Security", authenticationSecurity)}
                    {familiarItems("Cloud & Deployment Services", cloudDeployment)}
                    {familiarItems("Build & Package Management", buildPackageManagement)}
                    {familiarItems("Version Control & CI/CD", versionControlCiCd)}
                    {familiarItems("Testing & Code Quality", testingCodeQuality)}
                    {familiarItems("Content Management Systems", contentManagementSystems)}
                    {familiarItems("Design Tools", designTools)}
                    {familiarItems("Payment Processing", paymentProcessing)}
                </div>
            </div>
        </section>
    );
};

export default Skills;

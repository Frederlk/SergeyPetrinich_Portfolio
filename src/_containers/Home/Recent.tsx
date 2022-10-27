import { FC, useMemo } from "react";
import { Link as GoTo } from "react-scroll";
import { useInView } from "react-intersection-observer";

import { IPet } from "../../models/models";
import { firebaseAPI } from "../../services/firebaseAPI";
import Top from "../../_components/Top";
import RecentItem from "./RecentItem";

const Recent: FC = () => {
    const { data: pets } = firebaseAPI.useGetPetsQuery("PET");
    const [sectionRef, inViewSection] = useInView({ threshold: 0, triggerOnce: true, delay: 500 });
    const [btnRef, inViewBtn] = useInView({ threshold: 0, triggerOnce: true, delay: 500 });

    const sortedPets = useMemo(() => {
        if (pets && pets.length > 0) {
            return pets.map((pet: IPet, i) => i < 3 && <RecentItem key={pet.id} item={pet} />);
        }
    }, [pets]);

    return (
        <section className={`recent ${inViewSection ? "_inView" : ""}`}>
            <div ref={sectionRef} className="recent__container">
                <Top className="recent__top" title="Recent Projects" />
                <div className="recent__body">{sortedPets}</div>
                <div ref={btnRef} className={`recent__btn-wrap ${inViewBtn ? "_inView" : ""}`}>
                    <GoTo tabIndex={0} to="archive" smooth={true} duration={500} className="recent__btn btn">
                        More Projects
                    </GoTo>
                </div>
            </div>
        </section>
    );
};

export default Recent;

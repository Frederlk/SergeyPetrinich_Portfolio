import { FC, useMemo } from "react";
import { Link as GoTo } from "react-scroll";
import { sortData } from "../../helpers/functions";
import { firebaseAPI } from "../../services/firebaseAPI";
import Top from "../../_components/Top";
import RecentItem from "./RecentItem";

const Recent: FC = () => {
    const { data: pets } = firebaseAPI.useGetPetsQuery("PET");

    const sortedPets = useMemo(() => {
        if (pets && pets.length > 0) {
            return pets
                .slice()
                .sort((a, b) => sortData(a.releaseDate, b.releaseDate))
                .map((pet, i) => i < 3 && <RecentItem key={pet.id} item={pet} />);
        }
    }, [pets]);

    return (
        <section className="recent">
            <div className="recent__container">
                <Top className="recent__top" title="Recent Projects" />
                <div className="recent__body">{sortedPets}</div>
                <div className="recent__btn-wrap">
                    <GoTo to="recent" smooth={true} offset={-70} duration={500} className="recent__btn btn">
                        More Projects
                    </GoTo>
                </div>
            </div>
        </section>
    );
};

export default Recent;

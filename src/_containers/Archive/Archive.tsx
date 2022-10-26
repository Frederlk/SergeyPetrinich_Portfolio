import { FC, useMemo } from "react";
import { firebaseAPI } from "../../services/firebaseAPI";
import { Top } from "../../_components";
import ArchiveItem from "./ArchiveItem";

const Archive: FC = () => {
    const { data: pets, error, isLoading } = firebaseAPI.useGetPetsQuery("PET");

    const arhiveItems = useMemo(
        () => pets && pets.map((pet, i) => <ArchiveItem key={pet.id + i} pet={pet} />),
        [pets]
    );

    return (
        <section className="archive">
            <div className="archive__container">
                <Top title="Archive" className="archive__top" />
                <h3 className="archive__subtitle">
                    A big list of things I’ve worked on. Go on, click on it!
                </h3>
                <div className="archive__body">
                    <div className="archive__panel archive__panel_top">
                        <div className="archive__date">Date</div>
                        <div className="archive__title">Title</div>
                        <div className="archive__stack">Built with</div>
                        <div className="archive__links">Links</div>
                    </div>
                    {arhiveItems}
                    {/* {isLoading ? <Spinner /> : arhiveItems} */}
                </div>
            </div>
        </section>
    );
};

export default Archive;

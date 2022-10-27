import { FC, useMemo, useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ReactPaginate from "react-paginate";
import { CSSTransition } from "react-transition-group";
import { IPet } from "../../models/models";

import { firebaseAPI } from "../../services/firebaseAPI";
import { Top } from "../../_components";
import ArchiveItem from "./ArchiveItem";
import ArchiveSkeleton from "./ArchiveSkeleton";

const Archive: FC = () => {
    const { data: pets, isLoading } = firebaseAPI.useGetPetsQuery("PET");
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, delay: 500 });
    const listRef = useRef<HTMLUListElement | null>(null);
    const [updateAnimation, setUpdateAnimation] = useState(false);

    // We start with an empty list of items.
    const itemsPerPage = 10;
    const [currentItems, setCurrentItems] = useState<IPet[]>([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        if (pets) {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(pets.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(pets.length / itemsPerPage));
            setUpdateAnimation(true);
        }
    }, [itemOffset, itemsPerPage, pets]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        if (pets) {
            updateAnimation && setUpdateAnimation(false);
            setTimeout(() => {
                const newOffset = (event.selected * itemsPerPage) % pets.length;
                setItemOffset(newOffset);
                setUpdateAnimation(true);
            }, 500);
        }
    };

    const arhiveItems = useMemo(
        () => currentItems && currentItems.map((pet, i) => <ArchiveItem key={pet.id + i} pet={pet} />),
        [currentItems]
    );

    return (
        <section className={`archive ${inView ? "_inView" : ""}`}>
            <div ref={ref} className="archive__container">
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

                    {isLoading ? (
                        <ArchiveSkeleton />
                    ) : (
                        <>
                            <CSSTransition
                                nodeRef={listRef}
                                timeout={500}
                                classNames={"list"}
                                in={updateAnimation}
                            >
                                <ul ref={listRef} className="archive__list">
                                    {arhiveItems}
                                </ul>
                            </CSSTransition>
                            {pageCount > 1 && (
                                <ReactPaginate
                                    className="archive__pagination"
                                    breakLabel="..."
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={2}
                                    marginPagesDisplayed={1}
                                    pageCount={pageCount}
                                    previousLabel={<span className="_prev _icon-arrow" />}
                                    nextLabel={<span className="_next _icon-arrow" />}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Archive;

import { FC, memo } from "react";

const ArchiveSkeleton: FC = () => {
    return (
        <div className="archive__panel archive__panel_skeleton">
            <div className="archive__date">
                <span></span>
            </div>
            <div className="archive__title">
                <span></span>
            </div>
            <div className="archive__stack">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="archive__links">
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default memo(ArchiveSkeleton);

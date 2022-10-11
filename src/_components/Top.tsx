import { FC } from "react";

const Top: FC<{ className?: string; title: string }> = ({ className, title }) => {
    return (
        <div className={`${className || ""}top`}>
            <h2 className="top__title">{title}</h2>
        </div>
    );
};

export default Top;

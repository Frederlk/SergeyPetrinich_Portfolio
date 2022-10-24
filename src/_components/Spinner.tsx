import { FC } from "react";
import loading from "../assets/img/loading.gif";

const Spinner: FC = () => {
    return (
        <div className="spinner">
            <img src={loading} alt="loading..."></img>
        </div>
    );
};

export default Spinner;

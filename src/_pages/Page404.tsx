import { FC } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="404" content="Error 404" />
                <title>Error 404</title>
            </Helmet>

            <section className="page404">
                <div className="page404__container">
                    <h2 className="page404__title">Error 404</h2>
                    <div className="page404__label">Are you lost?</div>
                    <Link to="/" className="page404__button btn">
                        To Home Page
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Page404;

import { Fragment } from "react";

import {
    HeroSection,
    LiveAuction,
    SellerSection,
    Trending,
    StepSection

} from "../components";

export const Home = () => {
    return (
        <Fragment>

            <HeroSection />
            <LiveAuction />
            <SellerSection />
            <Trending />
            <StepSection />

        </Fragment>

    );
}
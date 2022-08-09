import { Fragment, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import {
    CommonSection,
    NftCard
} from "../components";
import { NFT__DATA } from "../assets/data/data";

export const Market = () => {
    const [data, setData] = useState(NFT__DATA);

    const handleCategory = () => { }

    const handleItems = () => { }


    // sorting data by high, middle and low
    const handleSort = e => {
        const filterValue = e.target.value;
        if (filterValue === "high") {
            const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

            setData(filterData);
        }

        if (filterValue === "mid") {
            const filterData = NFT__DATA.filter((item) => item.currentBid >= 5.50 && item.currentBid < 6);

            setData(filterData);
        }

        if (filterValue === "low") {
            const filterData = NFT__DATA.filter((item) => item.currentBid >= 4.89 && item.currentBid < 5.50);

            setData(filterData);
        }
    }

    return (
        <Fragment>
            <CommonSection title="MarketPlace" />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <div className="market__product__filter d-flex align-items-center justify-content-between">
                                <div className="filter__left d-flex -align-items-center gap-5">
                                    <div className="all__category__filter">
                                        <select onChange={handleCategory}>
                                            <option>All Categories</option>
                                            <option value="art">Art</option>
                                            <option value="music">Music</option>
                                            <option value="domain-name">Domain Name</option>
                                            <option value="virtual-world">Virtual World</option>
                                            <option value="trending-cards">Trending Cards</option>
                                        </select>
                                    </div>

                                    <div className="all__items__filter">
                                        <select onChange={handleItems}>
                                            <option>All Items</option>
                                            <option value="single-item">Single Item</option>
                                            <option value="bundle">Bundle</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="filter__right">

                                    <select onChange={handleSort}>
                                        <option>Sort By</option>
                                        <option value="high">High Rate</option>
                                        <option value="mid">Mid Rate</option>
                                        <option value="low">Low Rate</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        {
                            data?.map((item, index) => (
                                <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                                    <NftCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}
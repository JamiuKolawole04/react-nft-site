import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import { NftCard } from "./NftCard";
import { NFT__DATA } from "../assets/data/data.js";

export const LiveAuction = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="live__auction__top d-flex align-items-center justify-content-between">
                            <h3>Live Auction</h3>
                            <span> <Link to="/market">Explore more</Link> </span>
                        </div>
                    </Col>

                    {
                        NFT__DATA.slice(0, 4).map((item, index) => (
                            <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                                <NftCard item={item} key={item.id} />
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}
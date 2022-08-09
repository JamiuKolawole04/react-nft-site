import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../assets/data/data";
import { NftCard } from "./NftCard";

export const Trending = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h3 className="trending__title">Trending</h3>
                    </Col>

                    {
                        NFT__DATA.slice(0, 8).map((item, index) => (
                            <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                                <NftCard item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}
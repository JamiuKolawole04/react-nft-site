import { Container, Row, Col } from "reactstrap";

import { SELLER__DATA } from "../assets/data/data"


export const SellerSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" md="3" sm="4" xs="6" className="mb-4 w-100">
                        <div className="seller__section-title">
                            <h3>Top seller</h3>
                        </div>
                    </Col>

                    {
                        SELLER__DATA.map((item, index) => (
                            <Col lg="2" md="3" sm="4" xs="6" key={index}>
                                <div className="single__selller-card d-flex align-items-center gap-3">
                                    <div className="seller__img">
                                        <img src={item.sellerImg} alt="" className="w-100" />
                                    </div>

                                    <div className="seller__content">
                                        <h6>{item.sellerName}</h6>
                                        <h6>{item.currentBid}</h6>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }


                </Row>
            </Container>
        </section>
    );
}
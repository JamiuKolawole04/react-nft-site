import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import heroImg from "../assets/images/hero.jpg"

export const HeroSection = () => {
    return (
        <section id="hero__section">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <h2>Discover rare digital art and collect <span>sell extraordinary</span> NFTS</h2>
                            <p>Join to create, showcase and sell your digital artworks.Digitally sign your work by creating a tokenized certificate</p>

                            <div className="hero__btns d-flex align-items-center gap-4">
                                <button className="explore__btn d-flex align-items-center gap-2"> <i className="ri-rocket-line"></i> <Link to="/market">Explore</Link></button>
                                <button className="create__btn d-flex align-items-center gap-2"> <i className="ri-ball-pen-line"></i> <Link to="/create">Create</Link></button>
                            </div>

                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="hero__img">
                            <img src={heroImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}
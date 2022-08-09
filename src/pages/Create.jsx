import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import { CommonSection, NftCard } from "../components";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";

export const Create = () => {
    const item = {
        id: "04",
        title: "Guard",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ab.",
        imgUrl: img,
        creator: "Trantis Francis",
        creatorImg: avatar,
        currentBid: 7.89,
    }
    return (
        <Fragment>
            <CommonSection title="Create Item" />

            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="4" sm="6">
                            <h5 className="mb-4 text-light">Preview Item</h5>
                            <NftCard item={item} />
                        </Col>

                        <Col lg="9" md="8" sm="6">
                            <div className="create__item">
                                <form>
                                    <div className="form__input">
                                        <label htmlFor="">Upload file</label>
                                        <input type="file" className="upload__input" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Price</label>
                                        <input type="number" placeholder="Enter price for one item (ETH)" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Minimum Bid</label>
                                        <input type="number" placeholder="Enter minimum bid" />
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="form__input w-5-">
                                            <label htmlFor="">Starting Date</label>
                                            <input type="date" />
                                        </div>

                                        <div className="form__input w-50">
                                            <label htmlFor="">Expiration Date</label>
                                            <input type="date" />
                                        </div>
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Title</label>
                                        <input type="text" placeholder="Enter title" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Description</label>
                                        <textarea rows="7" placeholder="Enter description" className="w-100"></textarea>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}
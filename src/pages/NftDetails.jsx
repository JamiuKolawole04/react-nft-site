import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../assets/data/data";
import { CommonSection, LiveAuction } from "../components";

export const NftDetails = () => {
    const { id } = useParams();
    console.log(id);
    const singleNFT = NFT__DATA.find((item) => item.id === id);
    return (
        <Fragment>
            <CommonSection title={singleNFT.title} />

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <img src={singleNFT.imgUrl} className="w-100 single__nft-img" alt="" />
                        </Col>

                        <Col lg="6" md="6" sm="6">
                            <div className="single__nft__content">
                                <h2>{singleNFT.title}</h2>

                                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                    <div className="d-flex-align-items-center gap-4 single__nft-seen">
                                        <span> <i className="ri-eye-line"></i> 234 </span>
                                        <span> <i className="ri-heart-line"></i> 1234 </span>
                                    </div>

                                    <div className="d-flex-align-items-center gap-2 single__nft-more">
                                        <span> <i className="ri-send-plane-line"></i> 234 </span>
                                        <span> <i className="ri-more-2-line"></i> 1234 </span>
                                    </div>
                                </div>

                                <div className="nft__creator d-flex gap-3 align-items-center">
                                    <div className="creator__img"> <img src={singleNFT.creatorImg} className="w-100" alt="" /> </div>

                                    <div className="creator__detail">
                                        <p>Created By</p>
                                        <h6>{singleNFT.creator}</h6>
                                    </div>
                                </div>

                                <p className="my-4">{singleNFT.desc}</p>
                                <button className="singleNft-btn d-flex align-items-center gap-2 w-100"> <i className="ri-shopping-bag-line"></i> <Link to="/wallet">Place a Bid</Link> </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <LiveAuction />
        </Fragment>
    );
} 
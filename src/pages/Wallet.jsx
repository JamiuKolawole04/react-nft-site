import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import { CommonSection } from "../components";

export const Wallet = () => {
    const WALLET_DATA = [
        {
            title: "Bitcoin",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic cupiditate saepe autem reprehenderit dolorem!",
            icon: "ri-bit-coin-line"
        },
        {
            title: "Coinbase",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic cupiditate saepe autem reprehenderit dolorem!",
            icon: "ri-coin-line"
        },
        {
            title: "Metamask",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic cupiditate saepe autem reprehenderit dolorem!",
            icon: "ri-money-cny-circle-line"
        },
        {
            title: "Ethereum",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic cupiditate saepe autem reprehenderit dolorem!",
            icon: "ri-bit-coin-line"
        },
    ];
    return (
        <Fragment>
            <CommonSection title="Connect Wallet" />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <div className="w-50 m-auto">
                                <h3 className="text-light">Connect your wallet</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam, autem architecto cupiditate deleniti laborum reiciendis. Error nam ex totam!</p>
                            </div>
                        </Col>

                        {
                            WALLET_DATA.map((item, index) => (
                                <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                                    <div className="wallet__item">
                                        <span> <i className={item.icon}></i> </span>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>
                            ))
                        }



                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}
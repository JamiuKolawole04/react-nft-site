import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import { CommonSection } from "../components";

export const Wallet = () => {
    const WALLET_DATA = [
        {
            title: "Bitcoin",
            desc: "Get started with your external offline or online bitcoin wallet",
            icon: "ri-bit-coin-line"
        },
        {
            title: "Coinbase",
            desc: "Connect your token wallet easily through coinbase in a click with utmost security",
            icon: "ri-coin-line"
        },
        {
            title: "Metamask",
            desc: "Connect your metamask wallet and kick start your journey into the world of nft",
            icon: "ri-money-cny-circle-line"
        },
        {
            title: "Ethereum",
            desc: "coonect your ethereum wallet to send transactions and connect applications and tokens",
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
                                <p>Set up your wallet of choice and connect it to the our platform</p>
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
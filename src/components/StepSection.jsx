import { Link } from "react-router-dom"
import { Container, Col, Row } from "reactstrap";

export const StepSection = () => {
    const STEP_DATA = [
        {
            title: "Setup your wallet",
            desc: "Connect your wallet to securely store and receive  your payment ",
            icon: "ri-wallet-line",
        },
        {
            title: "Create your collection",
            desc: "create your collection  with cheap upfront fees using your own artwork and ideas, ",
            icon: "ri-layout-masonry-line",
        },
        {
            title: "Add your nfts",
            desc: "Import your nfts or create one to get starte with your nft journey.",
            icon: "ri-image-line",
        },
        {
            title: "List them for sale",
            desc: "Store and display your artwork for sales with considerable gas fees.",
            icon: "ri-list-check",
        },
    ];
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-4">
                        <h3 className="step__title">Create and sell your NFTs</h3>
                    </Col>

                    {
                        STEP_DATA.map((item, index) => (
                            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                                <div className="single__step__item">
                                    <span><i className={item.icon}></i></span>
                                    <div className="step__item__content">
                                        <h5> <Link to="/wallet"> {item.title}</Link> </h5>
                                        <p className="mb-0">{item.desc}</p>
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
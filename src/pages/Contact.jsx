import { Fragment, useRef } from "react";
import { Container, Row, Col } from "reactstrap";

import { CommonSection } from "../components"

export const Contact = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const subjectRef = useRef("");
    const messageRef = useRef("");


    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <CommonSection title="Contact" />

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="m-auto text-center">
                            <h2>Drop a Message</h2>
                            <p>Having problems with connecting you wallets, uploading your art works, creating your nfts and other techical problems? Fill in the form below.</p>

                            <div className="contact mt-4">
                                <form onSubmit={handleSubmit} >
                                    <div className="form__input">
                                        <input type="text" placeholder="Enter your name" ref={nameRef} />
                                    </div>
                                    <div className="form__input">
                                        <input type="email" placeholder="Enter your email" ref={emailRef} />
                                    </div>
                                    <div className="form__input">
                                        <input type="text" placeholder="Enter subject" ref={subjectRef} />
                                    </div>
                                    <div className="form__input">
                                        <textarea rows="7" placeholder="Write message" ref={messageRef}></textarea>
                                    </div>

                                    <button className="send__btn" style={{ border: "none", padding: "8px 24px", borderRadius: "4px", marginTop: "20px" }} >Send a Message</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </Fragment>
    );
}
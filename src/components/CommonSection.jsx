import { Container } from "reactstrap";

export const CommonSection = ({ title }) => {
    return (
        <section id="common__section">
            <Container className="text-center">
                <h2>{title}</h2>
            </Container>
        </section>
    );
}
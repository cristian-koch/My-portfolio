//import styled
import '../../styles/pages/footer.scss';

// import components styles
import { Container } from '../../components/components.styles';
import { Paragraph } from './Footer.styles';


function Footer () {

    return (
        <div className="footer_container">
            <Container>
                <div className="footer_copyright_wrapper">
                    <Paragraph>© 2024 Copyright: Cristian Koch Winter</Paragraph>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
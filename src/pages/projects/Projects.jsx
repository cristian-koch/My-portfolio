//import styled
import '../../styles/pages/projects.scss';

// import components styles
import { Container } from '../../components/components.styles';
import { Title, Paragraph } from './Projects.styles';

// import components
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import Icon from '../../components/iconImage/Icon';

// import image/icon
import ArrowProject from '../../assets/icons/icon-arrow.png'; 


function Projects () {

    return (
        <div id="projects" className="projects_container">
            <Container>
                <div className="projects_title_wrapper">
                    <Title>Meus projetos</Title>
                    <Paragraph>Em meus projetos, busco sempre alcançar resultados inovadores e impactantes.</Paragraph>
                </div>
            </Container>
            <div className="projects_background">
                <Container>
                    <div className="card_wrapper">
                        <Card width="380px" height="380px" backgroundColor="#2E2F34">
                            <div className="card_content_wrapper">
                                <a href="#null" className="card_projects_link">
                                    Ver mais
                                    <Icon src={ArrowProject} maxWidth="12px" width="100%" height="9px" marginLeft="10px"/>
                                </a>
                            </div>
                        </Card>
                        <Card width="380px" height="380px" backgroundColor="#2E2F34">
                            <div className="card_content_wrapper">
                                <a href="#null" className="card_projects_link">
                                    Ver mais
                                    <Icon src={ArrowProject} maxWidth="12px" width="100%" height="9px" marginLeft="10px"/>
                                </a>
                            </div>
                        </Card>
                        <Card width="380px" height="380px" backgroundColor="#2E2F34">
                            <div className="card_content_wrapper">
                                <a href="#null" className="card_projects_link">
                                    Ver mais
                                    <Icon src={ArrowProject} maxWidth="12px" width="100%" height="9px" marginLeft="10px"/>
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div className="card_button_wrapper">
                        <Button text="Ver todos projetos" link="https://github.com/cristian-koch?tab=repositories" background="#2E2F34" padding="20px 90px" />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Projects;
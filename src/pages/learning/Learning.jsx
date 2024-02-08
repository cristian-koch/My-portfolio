//import styled
import '../../styles/pages/learning.scss';

// import components styles
import { Container } from '../../components/components.styles';
import { Title, Paragraph, SubTitle } from './Learning.styles';

// import components
import Icon from '../../components/iconImage/Icon';

// import images/icons
import IconLearning from '../../assets/icons/icon-vector-learning.png';
import RiskImage from '../../assets/img/risk-image.svg';
import CircleBackground from '../../assets/img/first-circle-background.svg';


function Learning () {

    return (
        <Container>
            <div id="learning" className="learning_container">
                <div className="learning_title_wrapper">
                    <Icon src={IconLearning} maxWidth="125px" width="100%" />
                    <Title >Meu aprendizado</Title>
                    <Paragraph fontSize="16px">
                        Com determinação, tracei minha jornada de aprendizado, transformando desafios em oportunidades e consolidando um sólido alicerce de conhecimento.
                    </Paragraph>
                </div>
                <div className="learning_content_wrapper">
                    <Icon src={CircleBackground} maxWidth="205px" width="100%" position="absolute" top="30px" left="-130px" />
                    <Icon src={CircleBackground} maxWidth="370px" width="100%" position="absolute" bottom="-220px" right="-220px" />
                    <Icon src={RiskImage} maxWidth="1000px" width="100%" />
                    <div className="learning_risk_content_wrapper_first">
                        <SubTitle>Trabalho eficaz e colaborativo</SubTitle>
                        <Paragraph fontSize="14px">
                            Comunicativo e colaborativo, destaco minha habilidade em trabalhar efetivamente em equipe. Minha comunicação clara e aberta contribui para um ambiente de trabalho produtivo e positivo.
                        </Paragraph>
                    </div>
                    <div className="learning_risk_content_wrapper_second">
                        <SubTitle>Integração tecnológica e e-commerce</SubTitle>
                        <Paragraph fontSize="14px">
                            Destaco no meu portfólio conhecimento em <strong>JavaScript</strong>, <strong>Sass</strong> e <strong>GitHub</strong>, integrando essas tecnologias para criar interfaces web dinâmicas. Além disso, minha experiência com a plataforma <strong>VTEX</strong> garante soluções de e-commerce inovadoras.
                        </Paragraph>
                    </div>
                    <div className="learning_risk_content_wrapper_third">
                        <SubTitle>Desenvolvimento moderno e eficiente</SubTitle>
                        <Paragraph fontSize="14px">
                            Utilizando React com <strong>TypeScript</strong>, desenvolvo interfaces dinâmicas, aproveitando a robustez do <strong>React</strong> e a segurança do <strong>TypeScript</strong>. Contribuo para soluções modernas, escaláveis e de alto desempenho.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Learning;
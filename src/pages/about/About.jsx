//import styled
import '../../styles/pages/about.scss';

// import components styles
import { Container } from '../../components/components.styles';
import { Title, Paragraph } from './About.styles';

// import image
import BackgroundCircle from '../../assets/img/first-circle-background.svg';

// import components
import Icon from '../../components/iconImage/Icon';


function About () {

    return (
       <Container>
            <div id="about" className="about_container">
                <div className="about_background">
                    <Icon src={BackgroundCircle} maxWidth="370px" width="100%" position="absolute" top="20px" left="-200px" />
                </div>
                <div className="about_title_wrapper">
                    <Title>Sobre mim</Title>
                </div>
                <div className="about_content_wrapper">
                    <Paragraph>
                        Olá, sou Cristian Koch Winter, um entusiasta e profissional apaixonado pelo mundo da programação, especialmente focado no desenvolvimento web. Minha jornada nesse universo começou em 2020, quando decidi mergulhar de cabeça nos estudos dessa área fascinante.
                    </Paragraph>
                    <Paragraph>
                        Após um ano de dedicação e aprendizado constante, em 2021, conquistei minha primeira oportunidade profissional no setor de suporte, onde pude colocar em prática os conhecimentos adquiridos e me inserir no mercado de trabalho. Não demorou muito para que meu desempenho e minha paixão pelo desenvolvimento web fossem reconhecidos, e fui promovido para a posição de desenvolvedor front-end junior.
                    </Paragraph>
                    <Paragraph>
                        Nesse novo desafio, mergulhei de forma ainda mais profunda no mundo do desenvolvimento web, explorando diversas tecnologias, frameworks e metodologias. A cada projeto, busquei não apenas entregar soluções eficientes e inovadoras, mas também aprimorar minhas habilidades técnicas e criativas.
                    </Paragraph>
                    <Paragraph>
                        Estou constantemente em busca de novos desafios e oportunidades de crescimento, sempre alimentando minha paixão pelo aprendizado e pela evolução profissional. Acredito que o desenvolvimento web é muito mais do que escrever linhas de código - é uma forma de expressão, uma maneira de criar experiências significativas e impactantes para os usuários finais. E estou determinado a continuar minha jornada nesse emocionante universo, contribuindo para o avanço da tecnologia e para a construção de um mundo digital cada vez mais sofisticado e acessível.
                    </Paragraph>
                </div>
            </div>
       </Container>
    );
}

export default About;
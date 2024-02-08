//import styled
import '../../styles/pages/profile.scss';

// import components styles
import { Container } from '../../components/components.styles';
import { MyImage, Title, Description } from './Profile.styles';

// import images
import MyImageStyled from '../../assets/img/my-image.svg';
import IconConfirmed from '../../assets/icons/icon-confirmed.png';
import ImageBackgroundCircle from '../../assets/img/first-circle-background.svg';

// import components
import Icon from '../../components/iconImage/Icon';

function Profile() {

    return (
        <Container>
            <div id="start" className="profile_link"></div>

            <div className="background_image_circle_wrapper">
                <img className="first_background_circle" src={ImageBackgroundCircle} alt="ImageBackgroundCircle"/>
            </div>
            <div className="profile_wrapper">
                <div className="profile_content_wrapper">
                    <Title>Cristian Koch</Title>
                    <Description>
                        Sou desenvolvedor Web Front-end com sólidos conhecimentos na área. Atualmente, dedico-me intensamente à minha rotina de estudos, concentrando-me no aprimoramento como Full Stack e no idioma inglês. Há quase três anos, tenho estado ativamente envolvido no mercado.
                    </Description>
                    <div className="profile_skills_wrapper">
                        <div className="profile_skills_wrapper_icon">
                            <Icon src={IconConfirmed} alt="profileIcon" maxWidth="20px" width="100%" />
                            <span className="profile_skills_text">Hard Skills</span>
                        </div>
                        <div className="profile_skills_wrapper_icon">
                            <Icon src={IconConfirmed} alt="profileIcon" maxWidth="20px" width="100%" />
                            <span className="profile_skills_text">Soft Skills</span>
                        </div>
                    </div>
                </div>
                <div className="profile_image_wrapper">
                    <MyImage src={MyImageStyled} alt="myImage"/>
                </div>
            </div>
        </Container>
    );
}

export default Profile;
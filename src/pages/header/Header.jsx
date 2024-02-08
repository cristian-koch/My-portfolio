//import styled
import '../../styles/pages/header.scss';

// import components styles
import { Container } from '../../components/components.styles';
import { LogoImage } from './Header.styles';

// import images
import Logo from '../../assets/img/logo.svg';

// import components
import Button from '../../components/button/Button';


function Header() {
  return (
      <div className="header_container">
          <Container>
              <div className="header_wrapper">
                  <div className="logo_image_wrapper">
                      <a  href="#start" className="image_logo_link">
                          <LogoImage src={Logo} alt="logo" />
                      </a>
                  </div>
                <div className="menu_items_wrapper">
                    <ul>
                        <li>
                            <a href="#learning" className="menu_desktop_link">Aprendizado</a>
                            <div className="hover_underline"></div>
                        </li>
                        <li>
                            <a href="#projects" className="menu_desktop_link">Meus projetos</a>
                            <div className="hover_underline"></div>
                        </li>
                        <li>
                            <a href="#about" className="menu_desktop_link">Sobre mim</a>
                            <div className="hover_underline"></div>
                        </li>
                    </ul>
                    <div className="header_button_linkedin_wrapper">
                        <Button text="linkedin" link="https://www.linkedin.com/in/cristian-koch-winter/" background="#D05357" padding="12px 30px" />
                    </div>
                </div>
              </div>
          </Container>
      </div>
  );
}

export default Header;
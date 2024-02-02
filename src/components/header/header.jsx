//import styled
import '../../styles/components/header.scss';

// import components styles
import { Container } from '../components.styles';
import { LogoImage } from './header.styles';

// import images
import Logo from '../../assets/img/logo.svg';

// import components
import Button from '../button/button';


function Header() {
  return (
    <div className="header_container">
      <Container>
        <div className="header_wrapper">
          <div className="logo_image_wrapper">
            <a href="/" className="image_logo_link">
              <LogoImage src={Logo} alt="logo" />
            </a>
          </div>
          <div className="menu_items_wrapper">
            <ul>
              <li>
                <a href="#null" className="menu_desktop_link">Aprendizado</a>
                <div className="hover_underline"></div>
              </li>
              <li>
                <a href="#null" className="menu_desktop_link">Projetos</a>
                <div className="hover_underline"></div>
              </li>
              <li>
              <a href="#null" className="menu_desktop_link">Sobre mim</a>
              <div className="hover_underline"></div>
              </li>
            </ul>
            <div className="header_button_linkedin_wrapper">
              <Button text="linkedin" link="https://www.linkedin.com/in/cristian-koch-winter/" background="#D05357"/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
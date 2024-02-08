// import components styles
import { ButtonLink } from './Button.styles';

function Button ({ link, text, background, padding }) {

  return (
    <ButtonLink href={link} className="button" backgroundColor={background} padding={padding}>{text}</ButtonLink>
  );
}

export default Button;
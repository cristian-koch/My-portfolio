// import components styles
import { ButtonLink } from './button.styles';

function Button ({link, text, background}) {
  return (
    <ButtonLink href={link} className="button" backgroundColor={background}>{text}</ButtonLink>
  );
}

export default Button;
// import components styles
import { CardStyled } from './Card.styles';

function Card ({ width, height, backgroundColor, children }) {

    return (
        <CardStyled width={width} height={height} backgroundColor={backgroundColor}>{children}</CardStyled>
    );
}

export default Card;
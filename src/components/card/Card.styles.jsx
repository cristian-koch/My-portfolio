import { styled } from 'styled-components';

export const CardStyled = styled.div`
    background-color: ${ (props) => props.backgroundColor };
    width: ${ (props) => props.width };
    height: ${ (props) => props.height };
    border-radius: 18px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;
import { styled } from 'styled-components';

export const IconStyles = styled.img`
    max-width: ${ (props) => props.maxWidth };
    width: ${ (props) => props.width };
    height: ${ (props) => props.height };
    margin-left: ${ (props) => props.marginLeft };
    position: ${ (props) => props.position };
    top: ${ (props) => props.top };
    bottom: ${ (props) => props.bottom };
    right: ${ (props) => props.right };
    left: ${ (props) => props.left };
`;
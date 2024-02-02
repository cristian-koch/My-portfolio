import { styled } from 'styled-components';

export const ButtonLink = styled.a`
    font-size: 14px;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
    color: #fff;
    background-color: ${ (props) => props.backgroundColor };
`;
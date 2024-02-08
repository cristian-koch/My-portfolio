import { styled } from 'styled-components';

export const ButtonLink = styled.a`
    font-size: 16px;
    padding: ${ (props) => props.padding };
    border-radius: 8px;
    text-decoration: none;
    color: #E9E9E9;
    background-color: ${ (props) => props.backgroundColor };

    &:hover {
        opacity: .9;
    }
`;
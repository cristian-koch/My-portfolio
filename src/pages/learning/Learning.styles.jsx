import { styled } from 'styled-components';

export const Title = styled.h2`
    font-size: 40px;
    color: #E9E9E9;
    font-weight: 400;
`;

export const Paragraph = styled.p`
    max-width: 800px;
    font-size: ${ (props) => props.fontSize };
    color: #E9E9E9;
    font-weight: 400;
    margin-top: 10px;
    line-height: 1.6;
`;

export const SubTitle = styled.h3`
    font-size: 16px;
    color: #E9E9E9;
    font-weight: 700;
`;
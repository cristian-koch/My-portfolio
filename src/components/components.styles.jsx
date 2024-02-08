import { styled } from 'styled-components';


export const PageContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1025px) {
    max-width: 100%;
    padding: 0 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
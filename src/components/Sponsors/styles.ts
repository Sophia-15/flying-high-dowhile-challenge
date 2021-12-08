import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundLight};
  height: 100vh;
  width: 100%;
  padding-top: 77px;
`;

export const ContainerSponsors = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    line-height: 3.25rem;
    color: ${({theme}) => theme.colors.white};
    font-weight: 700;
    font-size: 3rem;
  }

  h2 {
    line-height: 3.25rem;
    color: ${({theme}) => theme.colors.footerText};
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
  }
`;

export const ContentSponsors = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content: center;

  img {
    margin: 3rem;
    width: 400px;
    height: 80px;
  }
`;
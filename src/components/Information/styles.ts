import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({theme}) => theme.colors.backgroundLight};
  min-height: 100vh;
  width: 100%;
  padding-top: 77px;
`;

export const ContainerInformation = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 81px;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
    font-size: 3rem;
    font-weight: 700;
  }
`;

export const ContentInformation = styled.main`
  width: 100%;
  max-width: 1440px;
  
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const LeftInformation = styled.section`
  img {
    width: 550px;
    height: 420px;
  }
`;

export const RightInformation = styled.section`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const CardInformation = styled.div`
  width: 520px;
  height: 175px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;


  border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};

  &:last-child {
    margin: 4rem 0;
    border: 0;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({theme}) => theme.colors.titleCard};
    font-size: 1.25rem;
    font-weight: 700;
    margin-left: 22px;
  }

  p {
    width: 440px;
    line-height: 1.75rem;
    margin-top: 16px;
    color: ${({theme}) => theme.colors.descriptionText};
    font-size: 1.125rem;
    margin-left: 22px;
  }
`;
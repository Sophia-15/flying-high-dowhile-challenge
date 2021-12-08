import styled from 'styled-components';

export const ContainerHome = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: calc(100vh - 6rem);
`;

export const LeftHome = styled.section`
  width: 690px;
  
  h1 {
    font-weight: 900;
    font-size: 4.5rem;
    line-height: 5rem;

    color: ${({theme}) => theme.colors.descriptionText};
  }

  h1 span {
    color: ${({theme}) => theme.colors.blue};
  }

  p {
    margin-top: 35px;
    width: 480px;

    font-size: 1.3rem;
    line-height: 2rem;

    color: ${({theme}) => theme.colors.subtitleText};
  }

  button {
    margin-top: 27px;
    width: 250px;
    height: 50px;

    border-radius: .5rem;
    background: ${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.background};
    font-size: 1.125rem;
    outline: none;
    font-weight: 700;
    border: none;
    transition: transform .5s;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      filter: brightness(0.8);
    }
  }
`;

export const RightHome = styled.section`
  img {
    width: 600px;
    height: 550px;
  }
`;
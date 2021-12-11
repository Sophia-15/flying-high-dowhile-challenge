import styled from 'styled-components';

export const ContainerHome = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: calc(100vh - 6rem);

  @media (max-width: 1490px) {
    justify-content: space-around;
  }

  @media (max-width: 1120px) {
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 420px) {
    margin-top: -2rem;
  }
`;

export const LeftHome = styled.section`
  max-width: 690px;
  
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

  @media (max-width: 1120px) {
    h1 {
      text-align: center;
    }

    p {
      margin: 1rem auto;
      text-align: center;
    }

    button {
      margin: 1rem auto;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 561px) {
    h1 {
      font-size: 3.5rem;
      line-height: 4rem;
    }

    p {
      width: 310px;
    }
  }

  @media (max-width: 430px) {
    width: 300px;
    margin-top: 5rem;
    
    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }

    p {
      max-width: 300px;
    }
  }
`;

export const RightHome = styled.section`
  img {
    width: 600px;
    height: 550px;
  }

  @media (max-width: 1490px) {
    img {
      width: 500px;
      height: 450px;
    }
  }

  @media (max-width: 561px) {
    img {
      width: 400px;
      height: 350px;
    }
  }

  @media (max-width: 430px) {
    img {
      width: 300px;
      height: 250px;
    }
  }
`;
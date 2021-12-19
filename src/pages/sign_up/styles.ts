import styled from 'styled-components';

export const ContainerSignUp = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContainerSignUpLeft = styled.section`
  img {
    width: 250px;
    height: 100px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 700;

    margin-bottom: 7rem;

    max-width: 600px;

    color: ${({theme}) => theme.colors.footerText}
  }

  .sign-up-image {
    margin: 2rem 0;

    img {
      width: 600px;
      height: 500px;
    }
  }

  @media (max-width: 1020px) {
    display: none;
  }
`

export const ContainerSignUpRight = styled.section`
  max-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    display: none;
    width: 350px;
    height: 120px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;

    color: ${({theme}) => theme.colors.white}
  }

  svg {
    position: relative;
    top: 78px;
    right: 153px;
    
    color: ${({theme}) => theme.colors.footerText};
    
    width: 33px;
    height: 33px;
  }

  button {
    width: 250px;
    height: 50px;

    margin-top: 3rem;

    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;

    border-radius: .5rem;
    background-color: ${({theme}) => theme.colors.yellow};
    transition: .2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 1000px) {
    img {
      margin: 3rem 0;
      display: flex;
    }
  }

    @media (max-width: 400px) {
      img {
        width: 350px;
        height: 60px;
      }
  }
}
`
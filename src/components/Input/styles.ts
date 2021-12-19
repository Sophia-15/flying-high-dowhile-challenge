import styled from 'styled-components';

export const ContainerInput = styled.main`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.footerText};
  }

  input {
    width: 360px;
    height: 60px;

    margin-top: .6rem;
    padding-left: 3rem;

    border: 0;
    border-radius: .5rem;
    background-color: ${({theme}) => theme.colors.inputColor};

    color: ${({theme}) => theme.colors.white};
    font-size: 1rem;
    text-align: left;

    ::placeholder {
      font-size: .9rem;
      color: ${({theme}) => theme.colors.footerText};
    }
  }

  @media (max-width: 1000px) {
    img {
      margin: 3rem 0;
      display: flex;
    }
  }
`
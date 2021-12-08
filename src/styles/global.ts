import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body { 
    background-color: ${({theme}) => theme.colors.background};
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 760px) {
    html {
      font-size: 77.5%;
    }
  }

  @media (max-width: 630px) {
    html {
      font-size: 67.5%;
    }
  }

  @media (max-width: 550px) {
    html {
      font-size: 57.5%;
    }
  }
`;
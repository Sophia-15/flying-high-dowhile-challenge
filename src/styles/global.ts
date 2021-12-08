import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: ${({theme}) => theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.blue};
    border-radius: 5px;
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
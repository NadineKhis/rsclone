import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: black;
    color: #333;
    font-size: 16px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  };

  html * {
    box-sizing: border-box;
  }
`;
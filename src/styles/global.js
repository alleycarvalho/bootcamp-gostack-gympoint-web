import { createGlobalStyle } from 'styled-components';
import colors from './colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    span {
      margin: -15px 0 15px;
      font-size: 13px;
      font-weight: bold;
      color: ${colors.red};
      align-self: flex-start;
    }
  }
`;

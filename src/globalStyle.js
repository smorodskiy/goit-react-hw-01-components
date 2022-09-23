import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const theme = {
  statistics: {
    titleBgColor: "#fff",
    titleTextColor: "#5a5a5a",
    listColors : {
      0: "#4ec4f8",
      1: "#a43cf3",
      2: "#e64c66",
      3: "#20b8c5",
    }
  }
}

const GlobalStyle = createGlobalStyle`    

    ${normalize}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    address {
        font-style: normal;
    }

    img {
        width: 100%;
        display: block;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
      /* background: #e7ecf2; */
      /* background-image: linear-gadient(to bottom right, #ff9eaa 0% 65%, #e860ff 95% 100%); */
      background: linear-gradient(to right, transparent, mistyrose);
      margin: 0;
      /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif; */
      font-family: 'Jost', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    } */
`;

export default GlobalStyle;

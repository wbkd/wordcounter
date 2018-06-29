import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    overflow-y: scroll;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
  }

  input, textarea, button, select {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #root {
    display: flex;
    min-height: 100%;
  }
`;

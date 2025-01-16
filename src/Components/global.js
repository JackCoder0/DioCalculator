import { createGlobalStyle } from 'styled-components';

import '@fontsource/roboto'; 

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
body {
  width: 100%;
  height: 100vh;
  background: rgb(128,126,206);
  background: linear-gradient(180deg, rgba(128,126,206,1) 0%, rgba(142,126,206,1) 100%);

  display: flex;
  align-items: center;
  justify-content: center;
}
`
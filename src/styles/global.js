import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  outline: 0;
  box-sizing: border-box
}

body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background: #0277BD
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}


html, border, #root{
  height: 100vh
}
`;

import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  :root{
      --verde-primario:#34F78F;
      --branco:#fff;
      --azul-primario:#5CB8DA;
      --azul-secundario:#18A0FB;
  }

  *{
      padding:0;
      margin:0;
      box-sizing:border-box;

      font-family:'Roboto', sans-serif;
  }

  html,body,#root{
      height: 100vh;
      width: 100vw;
  }

  h1, h2, h3{
      font-family:'Poppins', sans-serif;
      color:white;
  }
`;
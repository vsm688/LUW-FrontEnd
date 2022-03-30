import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        -ms-overflow-style: none;
        scrollbar-width: none;
    }    
    
    ::-webkit-scrollbar {
        display: none;
    }
    body{
      
        
        box-sizing: border-box ;
        margin: 0;
      
        height: 100vh;
          
    }
    #root{
        display:flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
      
    }   
`;

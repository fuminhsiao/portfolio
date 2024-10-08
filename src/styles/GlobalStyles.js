import { createGlobalStyle } from "styled-components";



const GlobalStyles =createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
}


body{
    font-family: 'Muli', sans-serif;
    overflow-x:hidden;
    background-color: #FAFAFA;
}
h1, h2, h3, h4, h5, h6{
    margin:0;
    padding:0;
}

a{
    color:inherit;
    text-decoration: none;
}

`

export default GlobalStyles;
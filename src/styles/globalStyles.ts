import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }
  
  * {
      margin: 0;
      padding: 0;
      border: none;
      text-decoration: none;
      list-style-type: none;
      box-sizing: border-box;
      outline: none;
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
  }

  body {
      background-color: ${({theme}) => theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${({theme})=> theme.colors.primary};
    &:hover {
      filter: opacity(0.8)
    }
  }
  .primary-color{
    color: ${({theme})=> theme.colors.primary};
  }
  .font-bold{
    font-weight: 700;
  }
  .h2{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #000000;
  }
  .wallet{
    font-weight: 500;
    color: ${({theme})=> theme.colors.primary};
    font-size: 2.5rem; //40px
    line-height: 47px;
  }
`

export default GlobalStyle
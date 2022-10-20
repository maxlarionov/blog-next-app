import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
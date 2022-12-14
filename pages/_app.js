import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { store } from '../store'

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #D9D9D9;
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
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
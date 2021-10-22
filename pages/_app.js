import '../styles/globals.css'
import BaseStyles from '../theme/baseStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BaseStyles />
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

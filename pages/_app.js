import '../styles/globals.css';
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp

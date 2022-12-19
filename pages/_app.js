import '../styles/globals.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  /*
  return(
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>

  )
  */

  return <Component {...pageProps} />
}

export default MyApp

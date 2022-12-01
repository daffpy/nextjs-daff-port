import '../styles/globals.css'
import localFont from '@next/font/local'

const myFont = localFont({ src: './StussyScript-Regular.ttf' })

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

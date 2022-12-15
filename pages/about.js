import Head from 'next/head'
import Navbar from '../components/Navbar'
import AboutPage from '../components/page/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Me | Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/webicon.png" />
      </Head>

      <Navbar />
      <AboutPage/>
    </div>
  )
}
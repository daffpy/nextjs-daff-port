import Head from 'next/head'
import Navbar from '../../components/Navbar'
import {ArtPage} from '../../components/page/Works'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/icon2.png" />
      </Head>

      <Navbar />
      <ArtPage/>
    </div>
  )
}
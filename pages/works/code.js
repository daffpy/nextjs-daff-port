import Head from 'next/head'
import Navbar from '../../components/Navbar'
import {CodePage} from '../../components/Works'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/icon2.png" />
      </Head>

      <Navbar />
      <CodePage/>
    </div>
  )
}
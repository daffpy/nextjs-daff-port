import Head from 'next/head'
import Navbar from '../../components/Navbar'
import {WorkPage} from '../../components/page/Works'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/webicon.png" />
      </Head>

      <Navbar />
      <WorkPage/>
    </div>
  )
}
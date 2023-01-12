import Head from 'next/head'
import Navbar from '../../components/Navbar'
//import {CodePage} from '../../components/page/Works'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code | Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/webicon.png" />
      </Head>

      <Navbar />
      {/*<CodePage/>*/}
    </div>
  )
}
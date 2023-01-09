import Head from 'next/head'
import Navbar from '../components/Navbar'
import GuestbookPage from '../components/page/Guestbook'
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/guestbook', undefined, { shallow: true })
  }, [])
  return (
    <div>
      <Head>
        <title>Guestbook | Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/webicon.png" />
      </Head>

      <Navbar />
      <GuestbookPage/>
      <Footer/>
    </div>
  )
}
import Head from 'next/head'
import Navbar from '../components/Navbar'
import GuestbookPage from '../components/page/Guestbook'
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
      <div className="max-w-[550px] mx-auto mt-[160px] ">
      <div className='mx-6'>
      <div className="text-[42px] font-outfit font-bold tracking-wide">
          Guestbook
      </div> 
      <GuestbookPage/>
      </div>
      </div>
    </div>
  )
}
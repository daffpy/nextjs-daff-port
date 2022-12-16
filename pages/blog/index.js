
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { getSortedPostsData } from '../../lib/posts';

export function BlogManager(post) {
  return(
        <div className='group py-6 rounded-xl tracking-wider'>
          <Link href={'/blog/' + post.id} passHref>
              <div className='flex gap-x-2'>
                <p className='font-light text-[15px] p-[2px] text-yellow-500'>{post.ddate}</p>
                <p className='text-[15px] p-[2px] text-[#cbd5e0]'>·</p>
                <p className='font-medium text-[15px] p-[2px] text-[#e60067]'>{post.readTime}</p>
              </div>
              <div className='font-bold text-[20px] p-[2px] group-hover:bg-[length:100%_100%] marker marker--text inline-block'>{post.title}</div>
              <div className='font-outfit font-light text-[16px] text-[#cbd5e0] p-[2px] tracking-wider'>{post.description}</div>
          </Link>
        </div>
  )
}
const Home = ({ allPostsData}) => {
  return (
    <div>
        <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/webicon.png" />
        </Head>
        <Navbar/>
        <div className="max-w-[550px] mx-auto mt-[160px]">
            <div className="mx-6 font-outfit">
                <div className="mt-[110px] text-left">
                    {allPostsData.map((post, index) => (
                      <BlogManager key={index} id={post.id} readTime={post.readTime} title={post.title} description={post.description} ddate={post.ddate}/>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home

import Head from 'next/head'
import MainPage from '../components/page/Main'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { getSortedPostsData } from '../lib/posts.js';
import Footer from '../components/Footer';

export function BlogManager(post) {
  return(
        <div className='group py-6 rounded-xl tracking-wider'>
          <Link href={'/blog/' + post.id} passHref>
              <div className='flex gap-x-2'>
                <p className='font-light text-[14px] p-[2px] text-yellow-500'>{post.ddate}</p>
                <p className='text-[15px] p-[2px] text-slate-500'>·</p>
                <p className='font-medium text-[14px] p-[2px] text-[#e60067]'>{post.readTime}</p>
              </div>
              <div className='font-normal font-outfit text-[19px] p-[2px] group-hover:bg-[length:100%_100%] marker marker--text inline-block'>{post.title}</div>
              <div className='font-outfit font-light text-[16px] text-slate-400 p-[2px] tracking-wide'>{post.description}</div>
          </Link>
        </div>
  )
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <link rel="icon" href="/webicon.png" />
      </Head>

      <Navbar />
      <MainPage/>
      <div className="max-w-[550px] mx-auto mt-12 border-t border-t-slate-700">
            <div className="mx-6 font-outfit">
                <div className="text-left">
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

/*
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('public','posts'))

  const posts = files.map(filename => ({ filename, time:fs.statSync(`public/posts/${filename}`).mtime.getTime()})).sort(((a, b) => (b.time - a.time))).map(f=> {
    const markdownWithMeta = fs.readFileSync(path.join('public','posts', f.filename, 'index.mdx'), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: f.filename.split('.')[0],
      readTime: readingTime(markdownWithMeta).text
    }
  })

  return {
    props: {
      posts
    }
  }
}
*/

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

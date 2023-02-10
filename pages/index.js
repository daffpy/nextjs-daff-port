import Head from 'next/head'
import MainPage from '../components/page/Main'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { ProjectHighlight } from '../components/CustomUI'
import { getSortedPostsData } from '../lib/posts.js';
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineStar} from "react-icons/ai"
import { getTweets } from '../lib/twitter'

export function BlogManager(post) {
  return(
        <div className='group py-6 rounded-xl tracking-wider'>
          <Link href={'/blog/' + post.id} passHref>
              <div className='flex gap-x-2 items-center'>
                <AiOutlineStar className=' text-yellow-900/90 dark:text-yellow-500'/>
                <p className='font-normal text-[14px] p-[2px] text-slate-800 dark:text-slate-400/70'>{post.ddate}</p>
                <p className='text-[15px] p-[2px] text-slate-500'>·</p>
                <p className='font-medium text-[14px] p-[2px] text-slate-600 dark:text-slate-500/90'>{post.readTime}</p>
              </div>
              <div className='font-medium font-outfit text-[19px] p-[2px] group-hover:bg-[length:100%_100%] marker marker--text inline-block'>{post.title}</div>
              <div className='font-outfit font-light text-[16px] text-slate-900 dark:text-slate-400 p-[2px] tracking-wide'>{post.description}</div>
          </Link>
        </div>
  )
}

export default function Home({ featuredPost, tweets }) {
  //console.log(tweets)
  return (
    <div>
      <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <link rel="icon" href="/webicon.png" />
      </Head>

      <Navbar />
      <MainPage/>
      <div className="max-w-[550px] mx-auto mt-12 ">
            <div className="mx-6 font-outfit">
                <div className="text-left border-t border-t-slate-700 py-6">
                    {featuredPost.map((post, index) => (
                      <BlogManager key={index} id={post.id} readTime={post.readTime} title={post.title} description={post.description} ddate={post.ddate}/>
                    ))}
                    <Link href="/blog" className='group flex gap-x-2 items-center mb-4 py-[6px] px-2 rounded-sm bg-slate-300/70 dark:bg-slate-800/50'>
                      <div className='text-slate-600 dark:text-slate-400/80 group-hover:text-black dark:group-hover:text-slate-200/90 tracking-wide font-light'>
                        Read all posts
                      </div>
                      <div className=''>
                       <BsArrowRight className='text-slate-600 dark:text-slate-400/80 group-hover:text-black dark:group-hover:text-slate-200/90'/>
                      </div>
                    </Link>
                </div>
                <ProjectHighlight tweets={tweets}/>
                  <Link href="https://twitter.com/daffxcx"
                        target="_blank"
                        rel="noreferrer noopener"
                        className='group flex gap-x-2 items-center pl-2 mt-6 mb-10 py-2 text-[15px] rounded-sm bg-slate-300/70 dark:bg-slate-800/50'>
                      <div className='text-slate-600 dark:text-slate-400/80 group-hover:text-black dark:group-hover:text-slate-200/90 tracking-wide font-light'>
                        View more on Twitter
                      </div>
                      <div className=''>
                       <BsArrowRight className='text-slate-600 dark:text-slate-400/80 group-hover:text-black dark:group-hover:text-slate-200/90'/>
                      </div>
                    </Link>
                {/*    
                <div className='border-t border-t-slate-700'>
                  <div className='pt-10 text-slate-800/90 leading-relaxed dark:text-slate-300/90 font-light tracking-wide'>
                    Wanna leave a <a className='italic'>remarkable™</a> message on this site for future visitors? — You can do so by signing the guestbook for this site!
                  </div>
                  <Link className="" href="/guestbook">
                    <button className=" tracking-wide font-light items-center group flex rounded-full hover:rounded-l-lg bg-slate-900/90 dark:bg-slate-200 px-5 pt-2 pb-2 mt-10 text-[14px] text-white dark:text-[#1d1d1e] hover:pr-[20px] ease-out duration-300">
                        View the Guestbook
                        <ArrIcon className='stroke-[1.5px] w-4 stroke-white dark:stroke-[#1d1d1e] ml-3 ease-in duration-200 group-hover:scale-x-[1.5] group-hover:ml-4' />
                    </button>
                  </Link>
                </div>
                    */}
            </div>
        </div>
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
  const tweets = await getTweets([
    '1431124096239157248',
    '1482499515936817152',
    '1425270064631083014',
    '1413288774193205249',
    '1415205004537827331',
    '1419277733373247488',
    '1421423772146364419',
    '1420686344288817154'
  ]);
  const limit = 3;
  const featuredPost = [];
  getSortedPostsData().filter((x,index) => ((x.featured === true || x.featured !== undefined ) && index <= limit - 1)).map(x => featuredPost.push(x));
  return {
    props: {
      featuredPost,
      tweets
    },
  };
}

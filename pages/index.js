import Head from 'next/head'
import MainPage from '../components/Main'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import readingTime from 'reading-time'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <link rel="icon" href="/icon2.png" />
      </Head>

      <Navbar />
      <MainPage className=""/>
      <div className="max-w-[550px] mx-auto mt-12 border-t border-t-slate-700">
            <div className="mx-6 font-outfit">
                <div className="text-left">
                    {posts.map((post, index) => (
                    <div key={index} className='group py-6 rounded-xl tracking-wider'>
                      <Link href={'/blog/' + post.slug} passHref key={post.slug}>
                          <div key={post.slug} className='font-light text-[15px] p-[2px] text-[#cbd5e0]'>{post.readTime}</div>
                          <div key={post.frontMatter.title} className='font-bold text-[20px] p-[2px] group-hover:bg-[length:100%_100%] marker marker--text inline-block'>{post.frontMatter.title}</div>
                          <div key={post.frontMatter.description} className='font-space font-light text-[16px] text-[#cbd5e0] p-[2px] tracking-wide'>{post.frontMatter.description}</div>
                      </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="pb-[150px]"></div>
    </div>
  )
}

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

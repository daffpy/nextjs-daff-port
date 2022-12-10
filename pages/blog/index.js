import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import readingTime from 'reading-time'

const Home = ({ posts }) => {
  return (
    <div>
        <Head>
        <title>Daffa - Developer & Pixel Artist</title>
        <meta name="description" content="another person from Indonesia" />
        <link rel="icon" href="/icon2.png" />
        </Head>
        <Navbar/>
        <div className="max-w-[600px] mx-auto mt-10">
            <div className="mx-6 font-outfit">
                <div className="mt-[110px] text-left">
                    {posts.map((post, index) => (
                    <div key={index} className='group p-6 rounded-xl tracking-wider'>
                    <Link href={'/blog/' + post.slug} passHref key={post.slug}>
                        <div key={post.slug}className='font-light text-[15px] p-[2px] text-[#cbd5e0]'>{post.readTime}</div>
                        <div key={post.frontMatter.title} className='font-bold text-[22px] p-[2px] group-hover:bg-[length:100%_100%] marker marker--text inline-block'>{post.frontMatter.title}</div>
                        <div key={post.frontMatter.description} className='font-light font-space text-[16px] text-[#cbd5e0] p-[2px] tracking-wide'>{post.frontMatter.description}</div>
                    </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
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

export default Home

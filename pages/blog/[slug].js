import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Image from "next/image";
import readingTime from 'reading-time'
import { Superchat, HugeQuote, BImage, WhatsappContainer, Whatsapp } from '../../components/CustomUI'

//import SyntaxHighlighter from 'react-syntax-highlighter'

const components = {Image, BImage, Superchat, HugeQuote, WhatsappContainer, Whatsapp}


const PostPage = ({ frontMatter: { title, ddate, description, tags },slug, mdxSource, readTime}) => {
  return (
    <div>
        <Head>
            <title>Daffa - Developer & Pixel Artist</title>
            <meta name="description" content="another person from Indonesia" />
            <link rel="icon" href="/icon2.png" />
        </Head>
        <Navbar/>
        <div className="max-w-[800px] mx-auto mt-[95px]">
            <div className="mx-6 font-outfit">
            <main>
                <div className='border-b border-b-slate-800 pb-10'>
                    <div className='flex py-4 gap-x-3 tracking-wide font-light items-center'>
                        <p className='text-slate-400 text-base'>{ddate}</p>
                        <p>•</p>
                        <p className='text-[#e60067] text-base'>{readTime}</p>
                    </div>
                    <h1 className='font-bold pb-6'>{title}</h1>
                    <h2 className='text-slate-400'>{description}</h2>
                    <div className='flex gap-x-3 mt-10 text-yellow-300 justify-between'>
                        <div className='flex gap-x-3'>{tags.map((tag, key) => <p className='text-base font-light tracking-wide' key={key}>{tag}</p>)}</div>
                    </div>
                </div>
                <div className='font-light py-10'>
                    <MDXRemote {...mdxSource} scope={{slug:slug}} components={components}/>
                </div>
                </main>
            </div>
        </div>
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('public','posts'))

  const paths = files.map(filename => ({
    params: {
        slug: filename
      }
  })) 

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('public','posts',slug,'index.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      readTime: readingTime(markdownWithMeta).text
    }
  }
}

export { getStaticProps, getStaticPaths}
export default PostPage
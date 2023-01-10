import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Image from "next/image";
import readingTime from 'reading-time'
import { Superchat, HugeQuote, BImage, WhatsappContainer, Whatsapp, AlertSign,
        PaginationBlog } from '../../components/CustomUI'

//import SyntaxHighlighter from 'react-syntax-highlighter'

const components = {Image, BImage, Superchat, HugeQuote, WhatsappContainer, Whatsapp, AlertSign}

/*
export function BeforeAfter(slug){
  const files = fs.readdirSync(path.join('public','posts'))
  const curr = files.indexOf(slug)
  const b_slug = files[curr-1] !== undefined ? files[curr-1] : null 
  const a_slug = files[curr+1] !== undefined ? files[curr+1] : null 
  return b_slug, a_slug

}
*/


const PostPage = ({frontMatter: { title, ddate, description, tags },slug, mdxSource, readTime, b_fm, a_fm}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content="another person from Indonesia" />
            <link rel="icon" href="/webicon.png" />
        </Head>
        <Navbar/>
        <div className="max-w-[800px] mx-auto mt-[130px]">
            <div className="mx-6 font-outfit">
            <main>
                <div className='border-b border-b-slate-800 pb-10'>
                    <div className='flex py-4 gap-x-3 tracking-wide font-light items-center'>
                        <p className='text-slate-800/80 dark:text-slate-400 text-base'>{ddate}</p>
                        <p>•</p>
                        <p className='text-[#e60067] text-base'>{readTime}</p>
                    </div>
                    <h1 className='font-bold pb-6'>{title}</h1>
                    <h2 className='text-slate-900/80 dark:text-slate-400'>{description}</h2>
                    <div className='flex gap-x-3 mt-10 text-orange-600 dark:text-yellow-300 justify-between'>
                        <div className='flex gap-x-3'>{tags.map((tag, key) => <p className='text-base font-light tracking-wide' key={key}>{tag}</p>)}</div>
                    </div>
                </div>
                <div className='font-light py-10'>
                    <MDXRemote {...mdxSource} scope={{slug:slug}} components={components}/>
                </div>
                <PaginationBlog after={a_fm} before={b_fm}/>
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
        slug: filename,
      }
  })) 

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug} }) => {
  const files = fs.readdirSync(path.join('public','posts'))
  const curr = files.indexOf(slug)
  const {data: b_fm} = files[curr-1] !== undefined ? matter(fs.readFileSync(path.join('public','posts',files[curr-1],'index.mdx'), 'utf-8')) : {data:false}
  files[curr-1] !== undefined ? b_fm.slug = files[curr-1] : ''
  const {data: a_fm} = files[curr+1] !== undefined ? matter(fs.readFileSync(path.join('public','posts',files[curr+1],'index.mdx'), 'utf-8')) : {data: false}
  files[curr+1] !== undefined ? a_fm.slug = files[curr+1] : ''
  //const a_fm = matter(fs.readFileSync(path.join('public','posts',(files[curr+1] !== undefined ? files[curr+1] : null),'index.mdx'), 'utf-8')) 

  const markdownWithMeta = fs.readFileSync(path.join('public','posts',slug,'index.mdx'), 'utf-8')
  //const test = fs.readFileSync(path.join('public','posts',a_slug,'index.mdx'), 'utf-8')

  //const {data: test_x} = matter(test)

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      a_fm,
      b_fm,
      frontMatter,
      slug,
      mdxSource,
      readTime: readingTime(markdownWithMeta).text
    }
  }
}

export { getStaticProps, getStaticPaths}
export default PostPage
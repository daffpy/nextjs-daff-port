import '../styles/globals.css'
import '../styles/globals.scss'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/Footer';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} >
        </Component>
        <Footer/>
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  )
}

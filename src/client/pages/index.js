import Head from 'next/head'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shane Blogs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='md:max-w-5xl lg:mx-auto mt-4 antialiased'>
        <Portfolio />
      </main>
    </>
  )
}

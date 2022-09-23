import Head from 'next/head'
import Header from '../component/Header'
import Hero from '../component/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snay-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Manish || Portfolio</title>
      </Head>
      <Header/>
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>
    </div>
  )
}

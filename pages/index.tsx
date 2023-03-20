import Head from 'next/head';
import Header from '../components/Header';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
       <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
        <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
          <div className='pt-14'>
            <h1 className='text-center text-white font-medium text-4xl lg:text-5xl'>
              New promos
            </h1>
          </div>
        </section>
    </div>
  )
}

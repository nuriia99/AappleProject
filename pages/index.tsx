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
      <Landing/>
    </div>
  )
}

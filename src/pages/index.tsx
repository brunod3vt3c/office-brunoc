import type { NextPage } from 'next'
import Head from 'next/head'
import Body from '../container/Body'
import Mid from '../components/Mid'


const Home: NextPage = () => {
  return (
    <div className="h-screen ">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body/>
    </div>
  )
}

export default Home

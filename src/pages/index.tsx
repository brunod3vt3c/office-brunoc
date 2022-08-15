import type { NextPage } from 'next'
import Head from 'next/head'
import Body from '../container/Body'
import Mid from '../components/Mid'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className="h-screen ">
      <Head>
        <title>BRUNOC.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body/>
      <Link href="/contact" className="text-red-500">Contacts</Link>
    </div>
  )
}

export default Home

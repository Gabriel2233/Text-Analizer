import Head from 'next/head'
import Analizer from '../components/analizer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Analizer />
    </div>
  )
}

import Head from 'next/head'
import StartPage from '../components/startPage'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StartPage />
    </div>
  )
}

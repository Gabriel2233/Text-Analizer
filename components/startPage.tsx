import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import startStyles from '../styles/startPage.module.css'

const StartPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Analizer</title>
      </Head>
      <div className={startStyles.mainContainer} >
        <div className={startStyles.textSide}>
          <h1 className={startStyles.mainText}>We help you build texts that you're proud of.</h1>
          <h3 className={startStyles.smallerText}>Find Synonyms, and analize your errors.</h3>
          <Link href='/analizer'>
            <button className={startStyles.exploreBtn}>Start now</button>
          </Link>
        </div>

        <img className={startStyles.img} src="/text.svg" alt="Boy and paper"/>
      </div>
    </>
  )
}

export default StartPage
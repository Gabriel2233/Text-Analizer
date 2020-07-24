import React, { useState, ChangeEvent, FormEvent } from 'react'
import Head from 'next/head'

import analizerStyles from '../styles/analizer.module.css'

const Analizer = () => {

  const [text, setText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(text)
  }

  return (
    <>
      <Head>
        <title>Analizer</title>
      </Head>
      <div className={analizerStyles.mainWrapper}>
        <nav className={analizerStyles.navbar}>
          <h1 className={analizerStyles.title}>Analizer</h1>
        </nav>

        <div className={analizerStyles.uiArea}>
          <div className={analizerStyles.copyContainer}> 
            <textarea 
              value={text} 
              onChange={handleChange} 
              className={analizerStyles.copyArea} 
              placeholder='Your text here' 
            />

            <button onClick={handleSubmit} className={analizerStyles.analizerBtn}>Results</button>
          </div>
          

          <div className={analizerStyles.resultsArea}>
            <div className={analizerStyles.dataContainer}>
              <div className={analizerStyles.point}>
                <h4 className={analizerStyles.title}>Gerundio</h4>
                <p>Nada Ainda...</p>
              </div>

              <div className={analizerStyles.point}>
                <h4 className={analizerStyles.title}>Repetições</h4>
                <p>Nada Ainda...</p>
              </div>
            </div>
             

            <div className={analizerStyles.helpContainer}>
                <h3 className={analizerStyles.helpTitle}>Ajuda com alusão?</h3>

                <input className={analizerStyles.searchTheme} placeholder='Digite o Tema' />
            </div>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default Analizer
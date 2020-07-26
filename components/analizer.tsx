import React, { useState, ChangeEvent, FormEvent, memo } from 'react'
import Head from 'next/head'

import analizerStyles from '../styles/analizer.module.css'
import Popup from './popup'

const Analizer:React.FC = () => {

  const [text, setText] = useState<string>('')
  const [words, setWords] = useState<string[]>([])
  const [repeated, setRepeated] = useState([])
  const [showReps, setShowReps] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
   
    const splitted = text.split(' ')
      
    setWords(splitted)

    const repeated = words.filter((e, i, a) => a.indexOf(e) !== i)
    const gerúndio = words.filter(word => word.includes('ndo'))

    setRepeated(repeated.filter((e, i, a) => a.indexOf(e) === i))

    console.log('Done')
  }

  const handlePopup = () => {
    if(repeated.length === 0) alert('No details yet..')

    setShowReps(true)
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
          <div style={{display: showReps ? 'flex' : 'none'}} className={analizerStyles.popupPositionning}> 
            <button className={analizerStyles.closeBtn} onClick={() => setShowReps(false)}>x</button>           
            <Popup data={repeated} />           
          </div>
          
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
                  <button onClick={handlePopup}>Details</button>
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
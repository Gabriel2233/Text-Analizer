import React, { useState } from 'react'

import popupStyles from '../styles/popup.module.css'

interface Props {
  data: string[];
}

const Popup:React.FC<Props> = ({ data }) => {

  return (
    <div className={popupStyles.pContainer}>
      <div>
        <h3 className={popupStyles.heading}>Repeated Words:</h3>
      </div>
      

      <div className={popupStyles.list}>
        {data.map(item => (
          <p className={popupStyles.lItem} key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Popup

'use client'

import { useEffect } from 'react'
import styles from './Score.module.css'

interface ScoreProps {
  score: number
}

export default function Score({score}: ScoreProps) {  
  return(
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Score:</p>
        <p>{score}</p>
      </div>
      <div className={styles.text}>
        <p>Record:</p>
        <p>50</p>
      </div>
    </div>
  )
}
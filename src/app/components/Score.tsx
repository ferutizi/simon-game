'use client'

import styles from './Score.module.css'

interface ScoreProps {
  score: number
  recordScore: string
}

export default function Score({score, recordScore}: ScoreProps) {  
  return(
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Score:</p>
        <p>{score}</p>
      </div>
      <div className={styles.text}>
        <p>Record:</p>
        <p>{recordScore}</p>
      </div>
    </div>
  )
}
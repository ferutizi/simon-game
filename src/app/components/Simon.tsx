'use client'

import { useEffect, useState } from 'react'
import usePattern from '../hooks/usePattern'
import Score from './Score'
import styles from './Simon.module.css'

export default function Simon() {
  const [isLoad, setIsLoad] = useState(false)

  const {
    loseGame,
    isPlaying,
    disableButtons,
    disableStart,
    score,
    recordScore,
    startGame,
    restartGame,
    selectColor,
    isActive
  } = usePattern()

  useEffect(() => {
    setIsLoad(true)
  }, [])

  if(!isLoad) return null

  return(
    <>
      <Score score={score} recordScore={recordScore} />
      <article className={styles.container}>
        <div className="grid grid-cols-2 rounded-full">
          <button
            disabled={disableButtons}
            onClick={() => selectColor(1)}
            className={`${styles.lightButton} ${isActive(1)} rounded-ss-full bg-red-600`}
          ></button>
          <button
            disabled={disableButtons}
            onClick={() => selectColor(2)}
            className={`${styles.lightButton} ${isActive(2)} rounded-se-full bg-blue-600`}
          ></button>
          <button
            disabled={disableButtons}
            onClick={() => selectColor(3)}
            className={`${styles.lightButton} ${isActive(3)} rounded-es-full bg-yellow-400`}
          ></button>
          <button
            disabled={disableButtons}
            onClick={() => selectColor(4)}
            className={`${styles.lightButton} ${isActive(4)} rounded-ee-full bg-green-600`}
          ></button>
        </div>
        {loseGame
          ? <button disabled={disableStart} className={`${styles.startButton} ${loseGame && styles.loseButton}`} onClick={() => restartGame()}>
              <div className={styles.shadowBorder}>
                <p className={styles.startText}>RESTART</p>
              </div>
            </button>
          : <button disabled={disableStart} className={`${styles.startButton} ${loseGame && styles.loseButton}`} onClick={() => startGame()}>
              <div className={styles.shadowBorder}>
                <p className={styles.startText}>{!isPlaying && "START!"}</p>
              </div>
            </button>
        }
      </article>
    </>
  )
}
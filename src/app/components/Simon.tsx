'use client'

import styles from './Simon.module.css'
import { useEffect, useState } from 'react'

type PatternNumbers = 1 | 2 | 3 | 4

export default function Simon() {
  const [pattern, setPattern] = useState<PatternNumbers[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [lengthAnswer, setLengthAnswer] = useState<number>(0)
  const [selectedColor, setSelectedColor] = useState<PatternNumbers>()
  const [clickCounter, setClickCounter] = useState<number>(0)
  const [disabledButtons, setDisableButtons] = useState<boolean>(false)
  const [loseGame, setLoseGame] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  
  useEffect(() => {
    getPattern()
  }, [])

  useEffect(() => {
    if(pattern.length > 1)
    setTimeout(() => {
      startGame()
    }, 1000);
  }, [pattern])

  const getPattern = () => {
    const nextStep = generateNextStep()
    setPattern([...pattern, nextStep])
  }

  const generateNextStep = () => {
    const random = Math.floor(Math.random() * 4) + 1
    return random as PatternNumbers;
  }

  const startGame = () => {
    if(loseGame) {
      setLoseGame(false)
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      setDisableButtons(true)
      setTimeout(() => {
        playPattern()
      }, 700)
    }
  }

  const playPattern = (index = 0) => {
    if(index < pattern.length && loseGame === false) {
      setActiveIndex(pattern[index])
      setTimeout(() => {
        setActiveIndex(null)
        setTimeout(() => {
          playPattern(index + 1)
        }, 500)
      }, 500);
    }
    setDisableButtons(false)
  }

  useEffect(() => {
    if(selectColor === undefined) return
    if(lengthAnswer < pattern.length) {
      if(selectedColor !== pattern[lengthAnswer - 1]) {
        setLoseGame(true)
        setIsPlaying(false)
      }
    } else {
      if(selectedColor !== pattern[lengthAnswer - 1]) {
        setLoseGame(true)
        setIsPlaying(false)
        setLengthAnswer(0)
        return;
      } else {
        setLengthAnswer(0)
        getPattern()
      }
    }
  }, [clickCounter])

  const selectColor = (userSelectedColor: PatternNumbers) => {
    setLengthAnswer((prev) => prev + 1)
    setSelectedColor(userSelectedColor)
    setClickCounter(clickCounter + 1)
  }

  const isActive = (index: PatternNumbers) => {
    return activeIndex === index ? styles.active : ''
  }

  return(
    <article className={styles.container}>
    <div className="grid grid-cols-2 rounded-full">
      <button
      disabled={disabledButtons}
        onClick={() => selectColor(1)}
        className={`${styles.lightButton} ${isActive(1)} rounded-ss-full bg-red-600`}
      ></button>
      <button
      disabled={disabledButtons}
        onClick={() => selectColor(2)}
        className={`${styles.lightButton} ${isActive(2)} rounded-se-full bg-blue-600`}
      ></button>
      <button
      disabled={disabledButtons}
        onClick={() => selectColor(3)}
        className={`${styles.lightButton} ${isActive(3)} rounded-es-full bg-yellow-400`}
      ></button>
      <button
      disabled={disabledButtons}
        onClick={() => selectColor(4)}
        className={`${styles.lightButton} ${isActive(4)} rounded-ee-full bg-green-600`}
      ></button>
    </div>
    <button className={styles.startButton} onClick={() => startGame()}>
    {loseGame
      ? <p className={styles.startText}>RESTART</p>
      : <p className={styles.startText}>{!isPlaying && "START!"}</p>
    }
    </button>
  </article>
  )
}
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
  
  useEffect(() => {
    getPattern()
  }, [])

  useEffect(() => {
    if(pattern.length > 1)
    setTimeout(() => {
      startGame()
    }, 1000);
  }, [pattern])

  useEffect(() => {
    if(loseGame) {
      alert("perdiste")
      setPattern([])
      getPattern()
      setLengthAnswer(0)
      setLoseGame(false)
    }
  }, [loseGame])

  const getPattern = () => {
    const nextStep = generateNextStep()
    setPattern([...pattern, nextStep])
  }

  const generateNextStep = () => {
    const random = Math.floor(Math.random() * 4) + 1
    return random as PatternNumbers;
  }

  const startGame = () => {
    setDisableButtons(true)
    playPattern()
  }

  const playPattern = (index = 0) => {
    if(index < pattern.length) {
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
      console.log(selectedColor, lengthAnswer, pattern.length, pattern[lengthAnswer - 1])
      console.log(pattern)
      if(selectedColor == pattern[lengthAnswer - 1]) {
        console.log('bien')
      } else {
        setLoseGame(true)
        console.log('mal')
      }
    } else {
      console.log(selectedColor, pattern[lengthAnswer - 1], pattern)
      if(selectedColor == pattern[lengthAnswer - 1]) {
        console.log('bien')
      } else {
        setLoseGame(true)
        console.log('mal')
      }
      setLengthAnswer(0)
      getPattern()
      console.log('reset')
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
      <p className={styles.startText}>START!</p>
    </button>
  </article>
  )
}
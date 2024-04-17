'use client'

import { useEffect, useState } from "react"
import styles from '../components/Simon.module.css'

type PatternNumbers = 1 | 2 | 3 | 4

export default function usePattern() {
  const [pattern, setPattern] = useState<PatternNumbers[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [lengthAnswer, setLengthAnswer] = useState<number>(0)
  const [selectedColor, setSelectedColor] = useState<PatternNumbers>()
  const [clickCounter, setClickCounter] = useState<number>(0)
  const [loseGame, setLoseGame] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  
  const [disableButtons, setDisableButtons] = useState<boolean>(true)
  const [disableStart, setDisableStart] = useState<boolean>(false)

  const [recordScore, setRecordStore] = useState<string>(() => {
    const item = window.localStorage.getItem('record-score')
    const record = item ? item.toString() : '0'
    return record
  })
  
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
    if(isPlaying) setScore((prevScore) => prevScore + 1)
  }

  const generateNextStep = () => {
    const random = Math.floor(Math.random() * 4) + 1
    return random as PatternNumbers;
  }

  const startGame = () => {
    setDisableButtons(false)
    setDisableStart(true)
    setIsPlaying(true)
    setTimeout(() => {
      playPattern()
    }, 700)
  }

  const restartGame = () => {
    setLoseGame(false)
    setIsPlaying(false)
    const nextStep = generateNextStep()
    setPattern([nextStep])
    setScore(0)
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
  }

  const setLocalStorage = (recordScore: number) => {
    const actualRecord = Number(window.localStorage.getItem('record-score'))
    if(recordScore > actualRecord) {
      window.localStorage.setItem("record-score", recordScore.toString())
      setRecordStore(recordScore.toString())
    }
  }

  const handleLoseGame = () => {
    setLocalStorage(score)
    setPattern([])
    setLoseGame(true)
    setIsPlaying(false)
    setLengthAnswer(0)
    setDisableButtons(true)
    setDisableStart(false)
  }

  useEffect(() => {
    if(selectColor === undefined) return
    if(lengthAnswer < pattern.length) {
      if(selectedColor !== pattern[lengthAnswer - 1]) {
        handleLoseGame()
      }
    } else {
      if(selectedColor !== pattern[lengthAnswer - 1]) {
        handleLoseGame()
      } else {
        setLengthAnswer(0)
        getPattern()
      }
    }
    console.log(score)
  }, [clickCounter])

  const selectColor = (userSelectedColor: PatternNumbers) => {
    setLengthAnswer((prev) => prev + 1)
    setSelectedColor(userSelectedColor)
    setClickCounter(clickCounter + 1)
  }

  const isActive = (index: PatternNumbers) => {
    return activeIndex === index ? styles.active : ''
  }

  return {loseGame, isPlaying, disableButtons, disableStart, score, recordScore, startGame, restartGame, selectColor, isActive } as const
}
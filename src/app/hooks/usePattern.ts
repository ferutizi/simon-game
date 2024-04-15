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
    setIsPlaying(true)
    setDisableButtons(true)
    setTimeout(() => {
      playPattern()
    }, 700)
  }

  const restartGame = () => {
    setLoseGame(false)
    setIsPlaying(false)
    const nextStep = generateNextStep()
    setPattern([nextStep])
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
        setPattern([])
        setLoseGame(true)
        setIsPlaying(false)
        setLengthAnswer(0)
      }
    } else {
      if(selectedColor !== pattern[lengthAnswer - 1]) {
        setPattern([])
        setLoseGame(true)
        setIsPlaying(false)
        setLengthAnswer(0)
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

  return {disabledButtons, loseGame, isPlaying, startGame, restartGame, getPattern, selectColor, isActive } as const
}
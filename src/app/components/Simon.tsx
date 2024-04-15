'use client'

import usePattern from '../hooks/usePattern'
import styles from './Simon.module.css'

export default function Simon() {
/*   const [pattern, setPattern] = useState<PatternNumbers[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [lengthAnswer, setLengthAnswer] = useState<number>(0)
  const [selectedColor, setSelectedColor] = useState<PatternNumbers>()
  const [clickCounter, setClickCounter] = useState<number>(0)
  const [disabledButtons, setDisableButtons] = useState<boolean>(false)
  const [loseGame, setLoseGame] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
 */
  const {disabledButtons, loseGame, isPlaying, startGame, restartGame, getPattern, selectColor, isActive } = usePattern()

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
    {loseGame
      ? <button className={`${styles.startButton} ${loseGame && styles.loseButton}`} onClick={() => restartGame()}>
          <div className={styles.shadowBorder}>
            <p className={styles.startText}>RESTART</p>
          </div>
        </button>
      : <button className={`${styles.startButton} ${loseGame && styles.loseButton}`} onClick={() => startGame()}>
          <div className={styles.shadowBorder}>
            <p className={styles.startText}>{!isPlaying && "START!"}</p>
          </div>
        </button>
    }
  </article>
  )
}
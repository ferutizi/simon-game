import styles from './Simon.module.css'

export default function Simon() {
  return(
    <article className="relative">
    <div className="grid grid-cols-2 rounded-full">
      <div className={`${styles.lightButton} rounded-ss-full bg-red-600`}></div>
      <div className={`${styles.lightButton} rounded-se-full bg-blue-600`}></div>
      <div className={`${styles.lightButton} rounded-es-full bg-yellow-400`}></div>
      <div className={`${styles.lightButton} rounded-ee-full bg-green-600`}></div>
    </div>
    <div className={styles.startButton}>
      <p className={styles.startText}>START!</p>
    </div>
  </article>
  )
}
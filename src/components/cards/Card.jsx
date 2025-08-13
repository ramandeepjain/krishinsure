import styles from './Card.module.css'
export default function Card({title, desc, icon}){
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
      </div>
      <div className={styles.thumb} aria-hidden>
        {icon}
      </div>
    </div>
  )
}
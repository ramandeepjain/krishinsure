import styles from './Button.module.css'
export default function Button({ kind = 'primary', as: Comp = 'button', children, ...rest }) {
  return <Comp className={`${styles.btn} ${styles[kind] || ''}`} {...rest}>{children}</Comp>
}
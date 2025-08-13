import Section from '../primitives/Section.jsx'
import Container from '../primitives/Container.jsx'
import Button from '../ui/Button.jsx'
import styles from './Newsletter.module.css'

export default function Newsletter(){
  const onSubmit = (e)=> e.preventDefault()
  return (
    <div className={styles.wrap}>
      <Section>
        <Container>
          <div className={styles.panel}>
            <h2>Subscribe for product updates</h2>
            <p className={styles.sub}>No spam. Just the good stuff.</p>
            <form onSubmit={onSubmit} className={styles.form}>
              <input className={styles.input} placeholder="you@company.com" type="email" required aria-label="Email address"/>
              <Button kind="light" as="button" type="submit">Subscribe</Button>
            </form>
          </div>
        </Container>
      </Section>
    </div>
  )
}
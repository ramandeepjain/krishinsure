import Section from '../primitives/Section.jsx'
import Container from '../primitives/Container.jsx'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <Section className="tight">
        <Container>
          <div className={styles.cols}>
            <div>
              <div className={styles.brand}>
                <span className={styles.logo} />
                <span>Krishinsure</span>
              </div>
              <p className={styles.small}>© {new Date().getFullYear()} Krishinsure, All rights reserved.</p>
            </div>
            <div className={styles.small}>
              <p><a href="#privacy">Privacy</a> · <a href="#terms">Terms</a> · <a href="#contact">Contact</a></p>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
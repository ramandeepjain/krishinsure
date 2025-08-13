import Section from '../primitives/Section.jsx'
import Container from '../primitives/Container.jsx'
import Button from '../ui/Button.jsx'
import styles from './CTAPanel.module.css'

export default function CTAPanel(){
  return (
    <Section className="tight">
      <Container>
        <div className={styles.panel}>
          <h3>Introducing Playgrounds</h3>
          <p className="muted">Try ideas in an isolated sandbox before rolling out to everyone.</p>
          <Button as="a" href="#playgrounds">Open Playground</Button>
        </div>
      </Container>
    </Section>
  )
}
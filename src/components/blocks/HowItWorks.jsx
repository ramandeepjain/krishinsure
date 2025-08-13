import Section from '../primitives/Section.jsx'
import Container from '../primitives/Container.jsx'
import { ChartIcon, CogIcon, UsersIcon } from '../icons/index.jsx'
import styles from './HowItWorks.module.css'

export default function HowItWorks(){
  return (
    <Section id="how" className="tight">
      <Container>
        <div className={`${styles.center} center`}>
          <h2>Take control in three steps</h2>
          <p className="muted">Launch value fast without compromising quality.</p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.icon}><ChartIcon/></div>
            <div>
              <h4>Connect your data</h4>
              <p>Plug in your warehouse, spreadsheets, or APIs in minutes.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}><CogIcon/></div>
            <div>
              <h4>Compose & automate</h4>
              <p>Build charts, define metrics, and schedule alerts — no fuss.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}><UsersIcon/></div>
            <div>
              <h4>Share with your team</h4>
              <p>Publish workspaces, control access, and collaborate securely.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
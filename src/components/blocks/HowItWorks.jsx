import Section from '../primitives/Section.jsx'
import Container from '../primitives/Container.jsx'
import styles from './HowItWorks.module.css'
import barChartIcon from '../../assets/icon_barchart.png';
import arbeitskraftabsicherung from '../../assets/arbeitskraftsabsicherung.svg';
import icon_medical from '../../assets/icon_medical_check.svg';

export default function HowItWorks(){
  return (
    <Section id="how" className="tight">
      <Container>
        <div className={`${styles.center} center`}>
          <h2>Our Offerings</h2>
          <p className="muted">Protect, Secure & Grow with us.</p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src={arbeitskraftabsicherung} alt="h" width={120} height={120}  />
            </div>
            <div>
              <h4>General insurance</h4>
              <p>Protect your health, home, vehicle, business, and more with our wide range of risk-covering insurance solutions.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <img className={styles.icon_image} src={icon_medical} alt="h" />
            </div>
            <div>
              <h4>Life insurance</h4>
              <p>Secure your family’s future with term plans, retirement solutions, and savings-based life insurance options.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
                <img className={styles.icon_image} src={barChartIcon} alt="h" />
            </div>
            <div>
              <h4>Investments</h4>
              <p>Grow your wealth with mutual funds, bonds, FDRs, gold, and other smart investment choices.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
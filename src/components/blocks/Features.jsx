import Section from '../primitives/Section.jsx'
import Container from '../primitives/Container.jsx'
import Card from '../cards/Card.jsx'
import { ChartIcon, UsersIcon, ShieldIcon, ArrowIcon, CogIcon } from '../icons/index.jsx'
import styles from './Features.module.css'

export default function Features(){
  return (
    <div className={styles.band} id="features">
      <Section>
        <Container>
          <div className={`${styles.center} center`}>
            <h2>What you can build in minutes</h2>
            <p className="muted">Prebuilt blocks to move faster.</p>
          </div>
          <div className={styles.grid}>
            <Card title="KPI Dashboards" desc="Ship executive-ready dashboards in hours, not weeks." icon={<ChartIcon/>} />
            <Card title="Cohort Analysis" desc="Understand retention and lifecycle moments." icon={<UsersIcon/>} />
            <Card title="Anomaly Alerts" desc="Instantly flag dips and spikes with context." icon={<ShieldIcon/>} />
            <Card title="Funnel Reports" desc="Visualize conversions across steps." icon={<ArrowIcon/>} />
            <Card title="Automated Emails" desc="Send scheduled digests to your team." icon={<CogIcon/>} />
            <Card title="Custom Models" desc="Bring your own SQL or Python." icon={<ChartIcon/>} />
          </div>
        </Container>
      </Section>
    </div>
  )
}

import Container from '../primitives/Container.jsx';
import Button from '../ui/Button.jsx';
import styles from './Hero.module.css';

export default function Hero(){
  return (
    <header className={styles.hero}>
      <Container>
        <h1>
          Protect what matters,<br />
          <em>tailored</em> for you.
        </h1>

        <p className={styles.sub}>
          Comprehensive insurance solutions to safeguard your life, health, and assets — all in one place.
        </p>

        <div className={styles.row}>
          <Button kind="light" as="a" href="tel:+919988528392">Get Covered Today</Button>
          {/* <Button kind="ghost" as="a" href="#learn">Learn more</Button> */}
        </div>
      </Container>
    </header>
  );
}

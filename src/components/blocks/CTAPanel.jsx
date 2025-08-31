import LogoMarquee from './LogoMarquee';
import styles from './CTAPanel.module.css'

import bajaj from '../../assets/bajaj_allianz.png';
import digit from '../../assets/digit.svg';
import generali from '../../assets/generali_central_logo.svg';
import iffco from '../../assets/iffco_logo.png';
import liberty from '../../assets/liberty_logo.avif';
import hdfc from '../../assets/hdfc_logo.png';
import sbig from '../../assets/sbig-logo.svg';
import shriram from '../../assets/shriram.svg';
import tata from '../../assets/tata_aig_logo.svg';
import zurich from '../../assets/zurich_kotak.svg';

export default function HomePage() {
  const logos_left = [bajaj,
    digit,
    generali,
    iffco,
    liberty,
  ];
  const logos_right = [
    hdfc,
    sbig,
    shriram,
    tata,
    zurich
  ];



  return (
    <section className={styles.panel}>
      <h2>We are associated with</h2>
      <LogoMarquee logos={logos_left} direction="left" />
      <LogoMarquee logos={logos_right} direction="right" />
    </section>
  );
}

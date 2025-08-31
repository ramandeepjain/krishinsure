import styles from './LogoMarquee.module.css';

// Pass in an array of logo URLs
export default function LogoMarquee({ logos = [], direction = 'left' }) {
  return (
    <div className={styles.marquee}>
      <div className={`${styles.track} ${direction === 'right' ? styles.reverse : ''}`}>
        {logos.concat(logos).map((logo, i) => (
          <div key={i} className={styles.logo}>
            <img src={logo} alt="Company logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

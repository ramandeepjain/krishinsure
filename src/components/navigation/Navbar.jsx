import React, {useEffect, useState} from 'react'
import Container from '../primitives/Container.jsx'
import Button from '../ui/Button.jsx'
import styles from './Navbar.module.css'

export default function Navbar(){
  const [shadow, setShadow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShadow(window.scrollY > 2)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <div className={styles.wrap}>
      <div className={`${styles.navbar} ${shadow?styles.shadow:''}`}>
        <Container>
          <div className={styles.inner}>
            <a className={styles.brand} href="#home" aria-label="Home">
              <span className={styles.logo} />
              <span>Krishinsure</span>
            </a>
            <nav className={styles.nav} aria-label="Primary">
              <a href="#home">Services</a>
              <a href="#home">NRIs</a>
              {/* <a href="#pricing">Pricing</a> */}
              <Button kind="light" as="a" href="tel:+919988528392">Talk to our experts</Button>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  )
}
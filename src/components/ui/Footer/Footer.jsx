import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo/logo-large.png'
import fb from '../../../assets/images/social-medias/facebook.png'
import tw from '../../../assets/images/social-medias/twitter.png'
import ld from '../../../assets/images/social-medias/linkedin.png'
import yt from '../../../assets/images/social-medias/youtube.png'
import ig from '../../../assets/images/social-medias/instagram.png'
import pt from '../../../assets/images/social-medias/pinterest.png'

import styles from './footer.module.scss'
import Button from '../../forms/Button/Button'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="HYDRA Logo" />
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.links}>
          <ul>
            <li><Link to="">ABOUT</Link></li>
            <li><Link to="">SERVICES</Link></li>
            <li><Link to="">TECHNOLOGIES</Link></li>
            <li><Link to="">HOW TO</Link></li>
            <li><Link to="">JOIN HYDRA</Link></li>
          </ul>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.links}>
        <ul>
            <li><Link to="">F.A.Q</Link></li>
            <li><Link to="">SITEMAP</Link></li>
            <li><Link to="">CONDITIONS</Link></li>
            <li><Link to="">LICENSES</Link></li>
          </ul>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.socialMedias}>
          <p>SOCIALIZE WITH HYDRA</p>
          <ul>
            <li><Link to='https://www.facebook.com/'><img src={fb} alt="Facebook" /></Link></li>
            <li><Link to='https://twitter.com/'><img src={tw} alt="Twitter" /></Link></li>
            <li><Link to='https://www.linkedin.com/'><img src={ld} alt="Linkedin" /></Link></li>
            <li><Link to='https://www.youtube.com/'><img src={yt} alt="Youtube" /></Link></li>
            <li><Link to='https://www.instagram.com/'><img src={ig} alt="Instagram" /></Link></li>
            <li><Link to='https://www.pinterest.com/'><img src={pt} alt="Pinterest" /></Link></li>
          </ul>
          <Button btnType="primary">BUILD YOUR WORLD</Button>
        </div>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.copyright}><p>2023 © HYDRA LANDING PAGE</p> <span className={styles.dash}>-</span> <p>BY ZINE. E. FALOUTI</p> <span className={styles.dash}>-</span> <p>ALL RIGHTS RESERVED</p></div>
    </footer>
  )
}

export default Footer
import React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.css'

export default () => (
  <ul className={styles.footer}>
    <li className={styles.item}>
      <a href="https://twitter.com/" target="_blank">
        Twitter
      </a>
    </li>
    <li className={styles.partition}></li>
    <li className={styles.item}>
      <a href="https://www.instagram.com/" target="_blank">
        Instagram
      </a>
    </li>
  </ul>
)

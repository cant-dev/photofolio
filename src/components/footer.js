import React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.css'

export default () => (
  <ul className={styles.footer}>
    <li className={styles.item}>
      <a href="https://x.com/ono_yah" target="_blank">
        X
      </a>
    </li>
    <li className={styles.partition}></li>
    <li className={styles.item}>
      <a href="https://www.instagram.com/ono.yah/?hl=ja" target="_blank">
        Instagram
      </a>
    </li>
  </ul>
)

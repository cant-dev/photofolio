import React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.css'

export default () => (
  <ul className={styles.footer}>
    <li className={styles.item}>
      <Link to="/film">Twitter</Link>
    </li>
    <li className={styles.partition}></li>
    <li className={styles.item}>
      <Link to="/me/">Instagram</Link>
    </li>
  </ul>
)

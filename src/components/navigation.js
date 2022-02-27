import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/film">FiLM</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">BLOG</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">ME</Link>
      </li>
    </ul>
  </nav>
)

import React from 'react'
import * as styles from './container.module.css'
import { Link } from 'gatsby'

export default ({ children }) => (
  <div className={styles.backgroundPatternWrapper} style={{ margin: '0 auto' }}>
    <div className={styles.patternFilm}>
      <Link to={`/`}>
        <div className={styles.topButtonBlock}>
          <div className={styles.upForwardMark}></div>
          {/* <div className={styles.topText}>TOP</div> */}
        </div>
      </Link>
    </div>
    <div className={styles.betweenPattern}>{children}</div>
    <div className={styles.patternFilm}></div>
  </div>
)

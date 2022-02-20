import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './blog-title-item.module.css'

export default ({ article }) => (
  <div className={styles.box}>
    <div>
      <h3 className={styles.title}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
    </div>
    <div>
      {article.tags &&
        article.tags.map((tag) => (
          <small className={styles.tag} key={tag}>
            {tag}
          </small>
        ))}
      <small className={styles.date}>{article.publishDate}</small>
    </div>
  </div>
)

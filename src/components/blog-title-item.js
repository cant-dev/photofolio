import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import styles from './blog-title-item.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    
    <div>
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
    </div>
    {article.tags &&
      article.tags.map((tag) => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
    <small>{article.publishDate}</small>

  </div>
)

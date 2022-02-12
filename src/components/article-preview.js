import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <div className={styles.imgArea}>
      <div>
        <div>番号</div>
        <div>Camera</div>
      </div>
      <div className={styles.imgBlock}>
        <Img alt="" fluid={article.heroImage.fluid} />
      </div>
      <small>{article.publishDate}</small>
    </div>
    <div>
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
    </div>
    

    {/* description */}
    {/* <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    /> */}
    {/* tags */}
    {/* {article.tags &&
      article.tags.map((tag) => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))} */}
  </div>
)

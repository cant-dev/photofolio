import React from 'react'
import { Link } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <div className={styles.headBlock}>
      <div className={styles.leftItem}>
        <div>
          <small>Kodak ULTRAMAX400</small>
          <small>4</small>
        </div>
      </div>
      <div className={styles.imgItem}>
        <GatsbyImage
          className=""
          alt=""
          image={article.photos.gatsbyImageData}
        />
      </div>
      <div className={styles.rightItem}>
        <small>{article.publishDate}</small>
      </div>
    </div>
    <div>
      <h3 className={styles.previewTitle}>
        <Link to={`/film/${article.slug}`}>{article.title}</Link>
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

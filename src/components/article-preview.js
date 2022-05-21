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
      <Link to={`/film/${article.slug}`}>
        <div className={styles.imgItem}>
          <div className={styles.imgItemInner}>
            <GatsbyImage
              className=""
              alt=""
              image={article.photos[0].gatsbyImageData}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Link>
      <div className={styles.rightItem}>
        <small>{article.publishDate}</small>
      </div>
    </div>
    <div>
      <Link to={`/film/${article.slug}`}>
        <h3 className={styles.previewTitle}>
          {article.title}
        </h3>
      </Link>
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

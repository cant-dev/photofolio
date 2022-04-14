import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

import * as heroStyles from '../components/hero.module.css'
import * as styles from './film-post.module.css'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

class FilmPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulFilmPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    console.log(post.photos)
    return (
      <div>
        <div className={styles.backLink}>
          <div className={styles.backArrow}></div>back to index
        </div>
        <div className={styles.screen}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={styles.content}>
            <div className={styles.turnButton}></div>
            <div className={styles.centerContent}>
              <div className={styles.borderBlock}>
                <h2 className={styles.title}>{post.title}</h2>
              </div>
              <div className={styles.imgBlock}>
                {post.photos.map((photo) => {
                  return <GatsbyImage image={photo.gatsbyImageData} />
                })}
              </div>
              <div className={styles.borderBlock}>
                <div className={styles.pageNumber}>2/10</div>
              </div>
            </div>
            <div className={styles.turnButton}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmPostTemplate

export const pageQuery = graphql`
  query FilmPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFilmPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      photos {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          # width: 424
          # height: 212
        )
      }
    }
  }
`

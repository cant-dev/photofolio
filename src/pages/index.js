import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './index.module.css'
import { Link } from 'gatsby'
import topImage from '../images/topsnow.png'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const filmPosts = get(this, 'props.data.allContentfulFilmPost.edges')
    const latestPostPhotoSrc = filmPosts[0]['node']['photos'][0]['gatsbyImageData']['images']['fallback']['src']
    
    return (
      <div>
        <Helmet title={siteTitle} />
        <div
          className={styles.screen}
          style={{ backgroundImage: 'url(' + latestPostPhotoSrc + ')' }}
        >
          <h1 className={styles.title}>
            <Link to="/film/">Photograph</Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulFilmPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "YYYY MMMM")
          photos {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

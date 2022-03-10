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
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div
          className={styles.screen}
          style={{ backgroundImage: 'url(' + topImage + ')' }}
        >
          <h1 className="">
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 424
              height: 212
            )
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './index.module.css'
import { Link } from 'gatsby'
import topImage from '../images/topsnow.png'
import { Content } from '../components/content'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const filmPosts = get(this, 'props.data.allContentfulFilmPost.edges')
    const postIndexRandom = Math.floor( Math.random() * filmPosts.length )
    const postRandom = filmPosts[postIndexRandom]
    const photoIndexRandom = Math.floor( Math.random() * postRandom['node']['photos'].length )
    const photoSrc = postRandom['node']['photos'][photoIndexRandom]['gatsbyImageData']['images']['fallback']['src']

    const aboutContent = get(this, 'props.data.allContentfulAbout.edges')
    console.log(aboutContent[0])
    const indexRandom = Math.floor( Math.random() * aboutContent[0]['node']['topImages'].length )
    const imageSrc = aboutContent[0]['node']['topImages'][indexRandom]['gatsbyImageData']['images']['fallback']['src']

    return (
      <div>
        <Helmet title={siteTitle} />
        <div
          className={styles.screen}
          style={{ backgroundImage: 'url(' + imageSrc + ')' }}
        >
          <h1 className={styles.title}>
            <Link to="/film/">{Content.topPageWord}</Link>
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulAbout {
      edges {
        node {
          topImages {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

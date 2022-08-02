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

    const aboutContent = get(this, 'props.data.allContentfulAbout.edges')
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

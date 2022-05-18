import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './me.module.css'
import Layout from '../components/layout'
import BlogTitleItem from '../components/blog-title-item'
import topImage from '../images/topsnow.png'

class Me extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div>
            <div
              className={styles.bioImg}
              style={{ backgroundImage: 'url(' + topImage + ')' }}
            ></div>
            <small>Bio</small>
            <h2>Name</h2>
            <small>199X | City / City</small>
            <div>introduction</div>
            <div>
              <small>Job</small>
              <h3>Example Job</h3>
            </div>
            <div>
              <small>Member of</small>
              <h3>One company</h3>
            </div>
            <div>
              <small>Work history</small>
              <ul>
                <li>
                  <span>20xx-20xx:</span>one history
                </li>
                <li>
                  <span>20xx-20xx:</span>one history
                </li>
                <li>
                  <span>20xx-20xx:</span>one history
                </li>
              </ul>
            </div>
            <div>
              <small>Educated</small>
              <ul>
                <li>
                  <span>20xx-20xx:</span>one history
                </li>
                <li>
                  <span>20xx-20xx:</span>one history
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Me

export const pageQuery = graphql`
  query BlogIndexQuery2 {
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
          publishDate(formatString: "YYYY / M / DD ")
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

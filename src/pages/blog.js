import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './blog.module.css'
import Layout from '../components/layout'
import BlogTitleItem from '../components/blog-title-item'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className={styles.blogIndexWrapper}>
            <div>Category</div>
            <ul className={styles.articleList}>
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <BlogTitleItem article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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

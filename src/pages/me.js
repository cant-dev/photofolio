import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './me.module.css'
import Layout from '../components/layout'
import BlogTitleItem from '../components/blog-title-item'
import topImage from '../images/topsnow.png'
import { GatsbyImage } from 'gatsby-plugin-image'

class Me extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const aboutContent = get(this, 'props.data.allContentfulAbout.edges')

    const profileImage = aboutContent[0].node.profileImage

    console.log(aboutContent, aboutContent[0].node.profileImage)

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className={styles.mePage}>
            <GatsbyImage
              className=""
              alt=""
              image={profileImage.gatsbyImageData}
              style={{ height: '540px' }}
              imgStyle={{ objectFit: 'contain' }}
            />
            <h2>PHOTOGRAPHER NAME</h2>
            <small>Bio</small>
            <div className={styles.introduction}>
              <p>1996年、XX県 XXX市出身生まれ。</p>
              <p>
                ここにプロフィール文章が入ります。
              </p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div>
              <small>Job</small>
              <h3 className={styles.jobContent}>Design Reseacher</h3>
              <span className={styles.jobContentSmall}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className={styles.linkText}>こちらのページ</span>
                </a>
                から詳しい職務をご覧頂けます。
              </span>
            </div>
            <div className={styles.historyList}>
              <small>history</small>
              <ul>
                <li>
                  <span>2021 - now </span> 株式会社⚪︎⚪︎
                </li>
                <li>
                  <span>2019 - 2021 </span>株式会社⚪︎⚪︎
                </li>
                <li>
                  <span>2018 - 2019 </span>⚪︎⚪︎株式会社
                </li>
                <li>
                  <span>2014 - 2018 </span>⚪︎⚪︎大学 学部
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
  query MePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAbout {
      edges {
        node {
          profileImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

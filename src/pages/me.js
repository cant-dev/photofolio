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
              className={styles.topImage}
              alt=""
              image={profileImage.gatsbyImageData}
              imgStyle={{ objectFit: 'contain' }}
            />
            <h2>Yasuhiro Ono</h2>
            <div className={styles.introduction}>
              <div>Design Reseacher</div>
              <div>photographer (amatur)</div>
              <span className={styles.jobContentSmall}>
                詳しくは
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className={styles.linkText}>こちらのページ</span>
                </a>
              </span>
            </div>
            <div className={styles.historyList}>
              <small className={styles.itemTitle}>history</small>
              <ul>
                <li>
                  <span>2021 - now </span>
                  <span className={styles.companyItem2}>PERSOL CAREER CO., LTD.</span>
                </li>
                <li>
                  <span>2019 - 2021 </span>
                  <span className={styles.companyItem}>tsumug.inc</span>
                </li>
                <li>
                  <span>2018 - 2019 </span>
                  <span className={styles.companyItem}>The Nishi-Nippon City Bank, Ltd.</span>
                </li>
                <li>
                  <span>2014 - 2018 </span>
                  <span className={styles.companyItem}>Meiji Univ commerce</span>
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

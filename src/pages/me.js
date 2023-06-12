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
            <h2>Yasuhiro Ono</h2>
            <small>Bio</small>
            <div className={styles.introduction}>
              <p>1996年、福岡県太宰府市出身生まれ。</p>
              <p>
                HR系事業会社でリサーチャー/デザイナーとして働きながら、プライベートでサービスを開発をしています。
              </p>
              <p>より良いユーザー体験 / まだ世にない価値を追い求め精進中。</p>
              <p>傍ら、フォトグラファーとしてアマチュアで活動をしています。</p>
              <p>Instagram / Twitter からご連絡をお待ちしております。</p>
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
                  <span>2021 - now </span> パーソルキャリア株式会社
                </li>
                <li>
                  <span>2019 - 2021 </span>株式会社 tsumug
                </li>
                <li>
                  <span>2018 - 2019 </span>西日本シティ銀行
                </li>
                <li>
                  <span>2014 - 2018 </span>明治大学 商学部
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './me.module.css'
import Layout from '../components/layout'
import BlogTitleItem from '../components/blog-title-item'
import topImage from '../images/topsnow.png'
import { GatsbyImage} from 'gatsby-plugin-image'

class Me extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const aboutContent = get(this, 'props.data.allContentfulAbout.edges')

    const profileImage = aboutContent[0].node.profileImage;

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
            <small className={styles.primaryWord}>Bio</small>
            <h2>Yasuhiro Ono</h2>
            {/* <small className={styles.addtionalWord}>199X | City / City</small> */}
            <div className={styles.introduction}>
              <p>1996年生まれ 福岡県太宰府市出身</p>
              <p>
                アマチュアで写真作品を撮っている26歳。東京都 世田谷区のほとりで、ひっそり活動中。
              </p>
              <p>
                普段はWEBサービス開発領域で、企画・デザイン・リサーチの仕事をしています。
              </p>
              <p>
              人にとって嬉しい体験・心地良いサービスを提供することを目標に、プライベートで個人開発などもしています。
              </p>

              <p>
                お仕事に関して、レジュメは
                <a
                  href="https://1996yono.notion.site/1996yono/Yasuhiro-Ono-cf3f4edba5374fd3858f4fe5d26a0b76"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.linkText}>こちら</span>
                </a>
                を見てください
              </p>
              <br></br>
              <p>
                プロフィール写真から作撮まで、ドリンク一杯でご一緒させて頂きます。
              </p>
              <p>お気軽にSNSからDMください！</p>
            </div>
            <div>
              <small>Job</small>
              <h3>Design Reseacher</h3>
            </div>
            <div className={styles.historyList}>
              <small>Work history</small>
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
              </ul>
            </div>
            <div className={styles.historyList}>
              <small>Educated</small>
              <ul>
                <li>
                  <span>2014 - 2018 </span>明治大学
                </li>
                <li>
                  <span>2011 - 2014 </span>福岡県立太宰府高等学校
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

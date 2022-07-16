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
          <div className={styles.mePage}>
            <div className={styles.bioImg}>
              <div
                className={styles.bioImgInner}
                style={{ backgroundImage: 'url(' + topImage + ')' }}
              ></div>
            </div>

            <small className={styles.primaryWord}>Bio</small>
            <h2>Yasuhiro Ono</h2>
            {/* <small className={styles.addtionalWord}>199X | City / City</small> */}
            <div className={styles.introduction}>
              <p>1996年生まれ 福岡県太宰府市出身</p>
              <p>人間が、心地良いと感じることに執着があります。</p>
              <p>
                良い体験を考えることが好きで、面白いアイデア・企画などあれば巻き込んで頂けると嬉しいです。
              </p>
              <p>
                できること / レジュメは
                <span className={styles.linkText}>こちら</span>
              </p>
              <br></br>
              <p>
                趣味で真剣に写真撮影の活動をしています。プロフィール写真から作撮まで、交通費だけで受けます。
              </p>
              <p>お気軽にSNSからご連絡を貰えると、喜びます。</p>
            </div>
            <div>
              <small>Job</small>
              <h3>Design Reseacher</h3>
            </div>
            <div className={styles.historyList}>
              <small>Work history</small>
              <ul>
                <li>
                  <span>2021 - now </span>パーソルキャリア株式会社
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
                  <span>2011 - 2014 </span>福岡県立太宰府高等学校
                </li>
                <li>
                  <span>2014 - 2018 </span>明治大学
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
    # allContentfulAbout {
    #   edges {
    #     node {
    #       educated {
    #         data
    #       }
    #       job
    #       name
    #       sns {
    #         data {
    #         }
    #       }
    #       profile {
    #         raw
    #       }
    #       workHistory {
    #         data
    #       }
    #     }
    #   }
    # }
  }
`

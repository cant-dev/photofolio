import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

import * as heroStyles from '../components/hero.module.css'
import * as styles from './film-post.module.css'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

class FilmPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
    this.post = get(this.props, 'data.contentfulFilmPost');
    this.photoPageMax = this.post.photos.length;
  }

  rightButton = () => {
    this.turnPage(1);
    console.log("debug##page:", this.state.page);
  }

  leftButton = () => {
    this.turnPage(-1);
    console.log("debug##page:", this.state.page);
  }

  turnPage = (num) => {
    console.log(this.photoPageMax, this.state);
    this.setState((state, props) => ({
      page: state.page + num
    }));
    if (this.state.page + num < 0) {
      this.setState((state, props) => ({
        page: this.photoPageMax - 1
      }));
    }
    if (this.state.page + num >= this.photoPageMax) {
      this.setState((state, props) => ({
        page: 0
      }));
    }
      
    console.log(this.photoPageMax, this.state);
  }

  render() {
    const post = get(this.props, 'data.contentfulFilmPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    let showingPhoto;
    showingPhoto = <GatsbyImage image={post.photos[this.state.page].gatsbyImageData} />;

    return (
      <div>
        <div className={styles.backLink}>
          <div className={styles.backArrow}></div>back to index
        </div>
        <div className={styles.screen}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={styles.content}>
            <div className={styles.turnButton} onClick={this.leftButton}></div>
            <div className={styles.centerContent}>
              <div className={styles.borderBlock}>
                <h2 className={styles.title}>{post.title}</h2>
              </div>
              <div className={styles.imgBlock}>
                {/* {post.photos.map((photo) => {
                  return <GatsbyImage image={photo.gatsbyImageData} />
                })} */}
                {showingPhoto}
              </div>
              <div className={styles.borderBlock}>
                <div className={styles.pageNumber}>{this.state.page + 1}/{this.photoPageMax}</div>
              </div>
            </div>
            <div className={styles.turnButton} onClick={this.rightButton}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmPostTemplate

export const pageQuery = graphql`
  query FilmPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFilmPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      photos {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          # width: 424
          # height: 212
        )
      }
    }
  }
`

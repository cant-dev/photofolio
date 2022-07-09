import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

import * as heroStyles from '../components/hero.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const options = {
  renderNode: {
    // /* <p> 用のコンポーネント */
    // [BLOCKS.PARAGRAPH]: ( node, children ) => <SomePComponent content={children} />,
    // /* <h1> 用のコンポーネント <h2>以下も同様 */
    //     [BLOCKS.HEADING_1]: ( node, children ) => <SomeH1Component content={ children } />,
    // /* <ul> 用のコンポーネント <ol>もOL_LISTに変更で行けます */
    //     [BLOCKS.UL_LIST]: (node, children) => <SomeUlComponent content={ children } />,
    // /* <blockquote> 用のコンポーネント */
    //     [BLOCKS.QUOTE]: (node, children) => <SomeQuoteComponent content={ children } />,
    // /* 画像表示用のコンポーネント */
    //     [BLOCKS.EMBEDDED_ASSET]: node => <SomeImageComponent content={ node } />,
    // /* 内部リンクブロック表示用のコンポーネント */
    //     [BLOCKS.EMBEDDED_ENTRY]: node => <SomeEntryBlockComponent content={ node } />,
    // /* インライン要素の内部リンク表示用のコンポーネント */
    // [INLINES.EMBEDDED_ENTRY]: node => <SomeEntryInlineComponent content={ node } />,
    // /* インライン要素のハイパーリンク表示用のコンポーネント その他のハイパーリンクも似たような記述で行けるはず */
    // [INLINES.HYPERLINK]: node => <SomeHyperlinkComponent content={ node } />,
    [BLOCKS.EMBEDDED_ASSET]: node => node => {
      return (
          <GatsbyImage
              image={ getImage(node.data.target) }
              alt={ node.data.target.title }
          />
      )
    },
  },
  renderMark: {
    // /* <b> 用のコンポーネント 下線とかイタリックも似たような記述で行けるはず */
    // [MARKS.BOLD]: text => <SomeBoldComponent text={ text } />,
    // /* <code> 用のコンポーネント */
    // [MARKS.CODE]: text => <SomeCodeComponent text={ text } />
  }
};
class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    
    const render = post.bodyRichText && renderRichText(post.bodyRichText, options)
    console.log(render)
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}></div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            
            {render}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      bodyRichText {
        raw
        references {
          contentful_id
          __typename
          title
          gatsbyImageData
        }
      }
    }
  }
`

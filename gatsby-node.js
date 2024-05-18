const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  // Define a template for film post
  const filmPost = path.resolve('./src/templates/film-post.js')

  const filmResult = await graphql(
    `
      {
        allContentfulFilmPost {
          nodes {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            photos {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                # width: 424
                # height: 212
              )
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const filmPosts = filmResult.data.allContentfulFilmPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (filmPosts.length > 0) {
    filmPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : filmPosts[index - 1].slug
      const nextPostSlug =
        index === filmPosts.length - 1 ? null : filmPosts[index + 1].slug

      createPage({
        path: `/film/${post.slug}/`,
        component: filmPost,
        context: {
          title: post.title,
          slug: post.slug,
          publishDate: post.publishDate,
          previousPostSlug,
          nextPostSlug,
          photos: post.photos,
        },
      })
    })
  }
}

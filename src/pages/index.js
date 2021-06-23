import * as React from "react"
import { Link, graphql } from "gatsby"

import {
  newTracker,
  trackPageView,
  trackStructEvent,
} from "@snowplow/browser-tracker"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

newTracker("sp1", "http://localhost:9090", {
  appId: "my-app-id",
  plugins: [],
})

// trackPageView() NOT INTERESTING FOR NOW...

const trackLectureView = title =>
  trackStructEvent({
    category: "Lectures",
    action: "View",
    label: title,
    value: 0.0,
  })

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Homepage" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                      onClick={trackLectureView(title)}
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

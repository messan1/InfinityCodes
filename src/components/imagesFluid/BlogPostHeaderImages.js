import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPostHeaderImages = () => (
  <StaticQuery
    query={graphql`
      query {
          file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)
export default BlogPostHeaderImages

import React from "react"
import { StaticQuery } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import "../components/css/Styles.css"
import ArticlesCard from "../components/ArticlesCard"
import NewsComp from "../components/NewsComp"
import { Helmet } from "react-helmet"
import SEO from './../components/seo';
const slugify = require('@sindresorhus/slugify');


const HandleTitle = data => {
  var value = ""
  var date = ""
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "-") {
      for (let j = i + 1; j < data.length; j++) {
        date += data[j]
      }
      return [value,date]
    }
    value += data[i]
  }
  return [value]
}
const IndexPage = ({ data }) => (
  <StaticQuery
    query={graphql`
      query IndexData {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "TableOfContent" } } }
        ) {
          edges {
            node {
              frontmatter {
                hero
                date
                author

              }
              headings {
                value
              }
            }
          }
        }
        site{
    siteMetadata{
      description
      title
      siteUrl
      keywords
    }
  }
      }
    `}
    render={data => (
      <Layout>
      <SEO
        title={data.site.title}
        description={data.site.description}
        keywords={data.site.keywords}
      />
      <Helmet>
      <meta charSet="utf-8" />
      <title>InfinityCodes - Apprendre le Code</title>
    </Helmet>
        <div className="AllContent">
          <Header />
          <Hero
            heroTitle={data.allMarkdownRemark.edges[0].node.frontmatter.hero}
            author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
            date={data.allMarkdownRemark.edges[0].node.frontmatter.date}

          />
          <article className="ArticleContent">
            {data.allMarkdownRemark.edges[0].node.headings.map(heading => (
              <ArticlesCard
              key={HandleTitle(heading.value)[0]} 
              title={HandleTitle(heading.value)[0]} 
              date={HandleTitle(heading.value)[1]}
              link = {slugify(HandleTitle(heading.value)[0])}
              author={data.allMarkdownRemark.edges[0].node.frontmatter.author} />
            ))}
          </article>
          <NewsComp />
          <footer>Infinitycodes</footer>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage

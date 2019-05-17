import React from "react"
import { Link, StaticQuery } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import "../components/css/Styles.css"
import ArticlesCard from "../components/ArticlesCard"
import NewsComp from "../components/NewsComp"


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
      }
    `}
    render={data => (
      <Layout>
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
              title={HandleTitle(heading.value)[0]} 
              date={HandleTitle(heading.value)[1]} 
              author={data.allMarkdownRemark.edges[0].node.frontmatter.author} />
            ))}
          </article>
          <NewsComp />
          <footer>INFINITYCODES</footer>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import "../components/css/Styles.css"
import ArticlesCard from "../components/ArticlesCard"
import NewsComp from "../components/NewsComp"

const IndexPage = () => (
  <Layout>
    <div className="AllContent">
      <Header />
      <Hero />
      <article className="ArticleContent">
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
      </article>
      <NewsComp />
      <footer>INFINITYCODES</footer>
    </div>
  </Layout>
)

export default IndexPage

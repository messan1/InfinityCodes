import React from "react"
import styled from "styled-components"
import NewsComp from "../components/NewsComp"
import SocialShare from "../components/SocialShare"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../components/css/BlogPost.css"
import HeroArticles from "../components/HeroArticles"
import Header from '../components/Header'
import CardForArticlesDetails from "../components/CardForArticlesDetails"
import Paginate from "../components/Paginate";

const DataStore = ({ state }) => (
  <StaticQuery

    query={graphql`
      query PostData {
        markdownRemark(frontmatter:{title:{eq:"Introduction"}}){
          frontmatter {
            title
            author
            date
          }
          html
        }
      }
    `}
    render={data => (
      <Wrap>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pourquoi apprendre à coder ?</title>
        </Helmet>
        <Header/>
        <Content>
          <HeroContent>
            <HeroArticles />
          </HeroContent>
          <ArticleContent>
            <div
              className="articleContent"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <Paginate/>
            <SocialShare />
            <NewsComp />
           
            <CardForArticlesDetails />
            <CardForArticlesDetails />
            <CardForArticlesDetails />
            <Copyr>INFINITYCODES</Copyr>
          </ArticleContent>
        </Content>
      </Wrap>
    )}
  />
)

export default DataStore

const Wrap = styled.div``
const HeroContent = styled.div`
  grid-column: 1/4;
`


const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 0.33fr 2fr 0.33fr;
  }
  @media (max-width: 584px) {
    grid-template-columns: 0.09fr 2fr 0.09fr;
  }
`

const ArticleContent = styled.div`
  grid-column: 2/3;
`


const Copyr = styled.div`
  font-size: 25px;
  font-weigth: 600;
  margin-top: 80px;
  margin-bottom: 80px;
`

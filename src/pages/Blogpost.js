import React, { Component } from "react"
import styled from "styled-components"
import BlogPostHeaderImages from "../components/imagesFluid/BlogPostHeaderImages"
import NewsComp from "../components/NewsComp"
import SocialShare from "../components/SocialShare"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../components/css/BlogPost.css"
import HeroArticles from "../components/HeroArticles"
import Header from '../components/Header'
import CardForArticlesDetails from "../components/CardForArticlesDetails"
import Paginate from "../components/Paginate";

const DataStore = ({ data }) => (
  <StaticQuery
    query={graphql`
      query PostData {
        markdownRemark {
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

const SiteTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  font-weight: 600;
  font-size: 1.875rem;
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

const Title = styled.h1`
  font-weight: 600;
  font-size: 30px;
  margin: 25px;
`
const ArticlesTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-top: 25px;
  margin-bottom: 10px;
`
const Box = styled.div`
  background-color: #e4b28e;
  color: white;
  font-size: 48px;
  border: 1px solid white;
  heigth: 64px;
  width: 64px;
  padding: 20px 8px;
  font-weight: 600;
`
const Author = styled.div`
  margin-bottom: 20px;
`
const By = styled.p`
display:inline
margin:0.8px 0 0;
font-size:14px;
font-weight:600;
color:#A8AAB2;
text-align:left;
`
const Name = styled.p`
display:inline
margin-left:10px;
font-size:14px;
font-weight:700;
text-align:left;
`
const Dates = styled.p`
  display: inline;
  margin-left: 15px;
  font-size: 14px;
  font-weight: 600;
  color: #a8aab2;
  text-align: left;
`
const Copyr = styled.div`
  font-size: 25px;
  font-weigth: 600;
  margin-top: 80px;
  margin-bottom: 80px;
`

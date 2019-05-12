import React, { Component } from "react"
import styled from "styled-components"
import BlogPostHeaderImages from "../components/imagesFluid/BlogPostHeaderImages"
import NewsComp from "../components/NewsComp"
import SocialShare from "../components/SocialShare"
import { StaticQuery, graphql } from "gatsby"
import Img from '../images/header.jpg'

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
        <SiteTitle>INFINITYCODES</SiteTitle>
        <Content>
          <ArticleContent>
            <Box>M</Box>
            <ArticlesTitle>{data.markdownRemark.frontmatter.title}</ArticlesTitle>
            <Author>
              <By>by</By>
              <Name>{data.markdownRemark.frontmatter.author}</Name>
              <Dates>{data.markdownRemark.frontmatter.date}</Dates>
            </Author>
            <img src={Img}/>
            <ArticleContentData dangerouslySetInnerHTML={{__html:data.markdownRemark.html}} />
            <SocialShare />
            <NewsComp />
            <Copyr>INFINITYCODES</Copyr>
          </ArticleContent>
        </Content>
      </Wrap>
    )}
  />
)

export default DataStore

const Wrap = styled.div``
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
const ArticleContentData = styled.div`
  margin-top: 25px;
  text-justify: auto;
`

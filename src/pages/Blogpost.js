import React, { Component } from "react"
import styled from "styled-components"
import BlogPostHeaderImages from "../components/imagesFluid/BlogPostHeaderImages"
import NewsComp from "../components/NewsComp"
import SocialShare from "../components/SocialShare"

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
  @media(max-width:1000px){
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
const Copyr=styled.div`
    font-size:25px;
    font-weigth:600;
    margin-top:80px;
    margin-bottom:80px;
`

class Blogpost extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Wrap>
        <SiteTitle>INFINITYCODES</SiteTitle>
        <Content>
          <ArticleContent>
            <Box>M</Box>
            <ArticlesTitle>
              Nulla Neque Consectetuer Ac Mus <br />
              Donec Penatibus
            </ArticlesTitle>
            <Author>
              <By>by</By>
              <Name>Messan Christian</Name>
              <Dates>24 April 2019</Dates>
            </Author>
            <BlogPostHeaderImages />
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
            dolor pretium donec dictum. Vici consequat justo enim. Venenatis
            eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem
            libero tellus viverra venenatis aliquam. Commodo natoque quam
            pulvinar elit. Eget aenean tellus venenatis. Donec odio tempus.
            Felis arcu pretium metus nullam quam aenean sociis quis sem neque
            vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc
            vulputate integer augue ultricies cras. Eget viverra feugiat cras
            ut. Sit natoque montes tempus ligula eget vitae pede rhoncus
            maecenas consectetuer commodo condimentum aenean.
            <Title>Tincidunt veni tellus orci aenean consect</Title>
            Sociis consequat adipiscing sit curabitur donec sem luctus cras
            natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper
            laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et
            parturient nisi sed enim. Nulla nec quis sit quisque sem commodo
            ultricies neque. Lorem eget venenatis dui ante luctus ultricies
            tellus montes. Quis in sapien tempus. Sociis consequat adipiscing
            sit curabitur donec sem luctus cras natoque vulputate dolor eget
            dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante
            viverra. A aenean sit augue curabitur et parturient nisi sed enim.
            Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget
            venenatis dui ante luctus ultricies tellus montes. Quis in sapien
            tempus.
            <SocialShare />
            <NewsComp />
            <Copyr>INFINITYCODES</Copyr>
          </ArticleContent>
        </Content>
      </Wrap>
    )
  }
}

export default Blogpost

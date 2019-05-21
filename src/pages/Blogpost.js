import React from "react"
import styled from "styled-components"
import NewsComp from "../components/NewsComp"
import { Helmet } from "react-helmet"
import "../components/css/BlogPost.css"
import HeroArticles from "../components/HeroArticles"
import Header from "../components/Header"
import SEO from "../components/seo";
import SocialShare from './../components/SocialShare';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
const slugify = require('@sindresorhus/slugify');
const baseURL = "https://infinitycodes.io/"
class MyCourse extends React.Component {
  render() {
    const disqusShortname = 'infinity-12';
    const disqusConfig = {
        url:baseURL+slugify(this.props.data.frontmatter.title),
        identifier: this.props.data.frontmatter.id,
        title: this.props.data.frontmatter.title,
    };
    return (
      <Wrap>
      <SEO
      title={this.props.data.frontmatter.title}
      description={this.props.data.frontmatter.description}
      keywords={this.props.data.frontmatter.keywords}
      />
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.data.frontmatter.title}</title>
        </Helmet>
        <Header />
        <Content>
          <HeroContent>
            <HeroArticles
              title = {this.props.data.frontmatter.title}
              date ={this.props.data.frontmatter.date}
              author ={this.props.data.frontmatter.author}
            />
          </HeroContent>
          <ArticleContent>
            <div
              className="articleContent"
              dangerouslySetInnerHTML={{ __html: this.props.data.html }}
            />
            <div className="shareSide">
              share
            </div>
            <SocialShare />
            <NewsComp />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
            <Copyr>Infinitycodes</Copyr>
          </ArticleContent>
        </Content>
      </Wrap>
    )
  }
}

const BlogPost = ({ data}) => {
  return (
      <MyCourse data={data.markdownRemark} seo = {data.site} />
  )
}

export default BlogPost

let title =""
export const query = graphql`
  query($title:String) {
    markdownRemark(frontmatter: { title: { eq: $title }}) {
      frontmatter {
        title
        author
        date
        description
        keywords
        id
      }
      html
    }
  }
`

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

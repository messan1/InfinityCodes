import React from "react"
import { Link } from "gatsby"
import Header from '../components/Header'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import  styled  from 'styled-components';

const IndexPage = () => (
  <Layout>
    <Header />
  </Layout>
)

const InfinityContent = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#292b2c;
  height: 100%;
`

const Content = styled.h1``

const SubContent = styled.h2``

export default IndexPage;
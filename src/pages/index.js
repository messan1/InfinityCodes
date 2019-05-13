import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import  styled  from 'styled-components';

const IndexPage = () => (
  <Layout>
    <InfinityContent>
      <Content>InfinityCode</Content>
      <SubContent>Bientot disponible</SubContent>
    </InfinityContent>
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

export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/pourquoi-apprendre-a-coder';
  }

  return null;
}
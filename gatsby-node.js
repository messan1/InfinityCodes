
import slugify from 'react-slugify'

var hello = slugify("je suis slyg")
console.log('object');


exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "TableOfContent" } } }) {
            edges {
              node {
                headings {
                  value
                }
              }
            }
          }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
        edge.node.headings.forEach(heading =>{
          slug : heading.value
            actions.createPage({
              path: slugify(heading.value),
              
              component: require.resolve(`./src/pages/Blogpost.js`),
              context: {
                 slug: slugify(heading.value) 
                },
            })
        })

    })
  }
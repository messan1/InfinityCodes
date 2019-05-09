  exports.createPages = async function({ actions, graphql }) {
      const { data } = await graphql(`
        query {
            allMarkdownRemark{
                edges{
                  node{
                    frontmatter{
                      path
                    }
                  }
                }
              }
        }
      `)
      data.allMarkdownRemark.edges.forEach(edge => {
            slug : edge.node.frontmatter.path
              actions.createPage({
                path: edge.node.frontmatter.path,
                
                component: require.resolve(`./src/pages/Blogpost.js`),
                context: {
                   slug:edge.node.frontmatter.path
                  },
              })
  
      })
    }
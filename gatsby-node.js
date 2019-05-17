const slugify = require('@sindresorhus/slugify');
const HandleTitle = data => {
  var value = ""
  var date = ""
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "-") {
      for (let j = i + 1; j < data.length; j++) {
        date += data[j]
      }
      return [value,date]
    }
    value += data[i]
  }
  return [value]
}
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
              path: slugify(HandleTitle(heading.value)[0]),
              component: require.resolve(`./src/pages/Blogpost.js`),
              context: {
                 slug:slugify(HandleTitle(heading.value)[0])
                },
            })
        })

    })
  }
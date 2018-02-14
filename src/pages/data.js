import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer'

const FileListItem = props => (
  <li>
    <Link to={props.node.publicURL}>{props.node.relativePath}</Link>
  </li>
)

const FileList = props => (
  <ul>{props.files.map(node => <FileListItem key={node.id} node={node} />)}</ul>
)

const DataPage = ({ data }) => {
  const files = data.allFile.edges.map(e => e.node)
  return (
    <div>
      <div className="container">
        <h1 className="title">Datos</h1>
        <FileList files={files} />
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query DataQuery {
    allFile(
      sort: { fields: [relativePath], order: ASC }
      filter: { extension: { eq: "geojson" } }
    ) {
      edges {
        node {
          relativePath
          publicURL
          extension
        }
      }
    }
  }
`

export default DataPage
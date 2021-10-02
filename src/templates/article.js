import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Article = ({ data }) => {
  return (
    <Layout>
      <h1>{data.strapiArticles.title}</h1>
      <p>
        by{" "}
        <Link to={`/${data.strapiArticles.author.username}`}>
          {data.strapiArticles.author.username}
        </Link>
      </p>
      <GatsbyImage
        image={getImage(data.strapiArticles.image.localFile)}
        alt={data.strapiArticles.title}
      />
      <p>{data.strapiArticles.content}</p>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      content
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              width: 200
              height: 125
            )
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`

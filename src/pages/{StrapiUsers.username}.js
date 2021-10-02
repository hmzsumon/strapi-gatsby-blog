import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
const User = ({ data }) => {
  const { username } = data.strapiUsers
  return (
    <Layout>
      <h2>{username}</h2>
      <ul>
        {data.strapiUsers.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/Articles_${article.id}`}>{article.title}</Link>
            </h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default User
export const query = graphql`
  query UserTemplate($username: String!) {
    strapiUsers(username: { eq: $username }) {
      id
      username
      articles {
        id
        title
        content
      }
    }
  }
`

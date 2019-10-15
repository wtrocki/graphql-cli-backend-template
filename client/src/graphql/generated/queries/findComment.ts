import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const findComment = gql`
  query findComment($id: ID!, $title: String!, $description: String!) {
    findComments(fields: {id: $id, title: $title, description: $description}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`

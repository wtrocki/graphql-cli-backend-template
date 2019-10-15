import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const createComment = gql`
  mutation createComment($id: ID!, $title: String!, $description: String!, $noteId: ID!) {
    createComment(input: {title: $title, description: $description, noteId: $noteId}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`

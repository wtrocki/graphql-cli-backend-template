import gql from "graphql-tag"
import { CommentFragment } from "../fragments/Comment"

export const updateComment = gql`
  mutation updateComment($id: ID!, $title: String!, $description: String!, $noteId: ID!) {
    updateComment(id: $id, input: {title: $title, description: $description, noteId: $noteId}) {
      ...CommentFields
    }
  }

  ${CommentFragment}
`

import gql from "graphql-tag"
import { NoteFragment } from "../fragments/Note"

export const findNote = gql`
  query findNote($id: ID!, $title: String!, $description: String!) {
    findNotes(fields: {id: $id, title: $title, description: $description}) {
      ...NoteFields
    }
  }

  ${NoteFragment}
`

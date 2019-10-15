export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['ID'],
  title: Scalars['String'],
  description: Scalars['String'],
  note: Note,
};

export type CommentFilter = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  noteId?: Maybe<Scalars['ID']>,
};

export type CommentInput = {
  title: Scalars['String'],
  description: Scalars['String'],
  noteId: Scalars['ID'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createNote: Note,
  createComment: Comment,
  updateNote: Note,
  updateComment: Comment,
};


export type MutationCreateNoteArgs = {
  input: NoteInput
};


export type MutationCreateCommentArgs = {
  input: CommentInput
};


export type MutationUpdateNoteArgs = {
  id: Scalars['ID'],
  input: NoteInput
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'],
  input: CommentInput
};

export type Note = {
   __typename?: 'Note',
  id: Scalars['ID'],
  title: Scalars['String'],
  description: Scalars['String'],
  comment?: Maybe<Array<Comment>>,
};

export type NoteFilter = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type NoteInput = {
  title: Scalars['String'],
  description: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  findNotes: Array<Note>,
  findComments: Array<Comment>,
  findAllNotes: Array<Note>,
  findAllComments: Array<Comment>,
};


export type QueryFindNotesArgs = {
  fields: NoteFilter
};


export type QueryFindCommentsArgs = {
  fields: CommentFilter
};

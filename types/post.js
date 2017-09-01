// @flow

export type Post = {
  title: string,
  description?: string,
  author: string,
  date: string,
  tags: Array<string>,
  body: string,
  slug: string,
};

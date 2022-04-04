export interface IPosts {
  title: string;
  body: string;
  tags: string[] | null;
  authorId: string;
  views: number;
  comment: object[] | null;
  author: IPostAuthor;
}
export interface IPostAuthor {
  fullname: string;
  bio: StringOrNull;
  id: string;
  twitter: StringOrNull;
}

export type StringOrNull = string | null;

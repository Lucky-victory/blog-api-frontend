export interface IArticles {
  title: string;
  body: string;
  tags: string[] | null;
  authorId: string;
  views: number;
  comments: object[] | null;
  author: IArticleAuthor;
  heroImage: string;
  category: string | null;
  publishedAt: Date;
}
export interface IArticleAuthor {
  fullname: string;
  bio: StringOrNull;
  id: string;
  twitter: StringOrNull;
  profileImage: string;
}
export interface IArticlesResponse {
  message: string;
  status: number;
  articles: IArticles[];
}
export type StringOrNull = string | null;

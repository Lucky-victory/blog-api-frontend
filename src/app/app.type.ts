export interface IArticles {
  title: string;
  content: string;
  intro: string;
  authorId: string;
  views: number;
  commentsCount: number;
  author: IArticleAuthor;
  heroImage: string;
  category: StringOrNull;
  publishedAt: Date;
  modifiedAt: Date;
  slug: string;
  readTime: number;
}
export interface IArticleAuthor {
  bio: StringOrNull;
  id: string;
  twitter: StringOrNull;
  profileImage: string;
  username: string;
  fullname: string;
  github: StringOrNull;
  linkedIn: StringOrNull;
}
export interface IArticlesResponse {
  message: string;
  status: number;
  articles: IArticles[];
}
export type StringOrNull = string | null;

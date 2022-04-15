export interface IArticles {
  title: string;
  content: string;
  intro: string;
  authorId: string;
  views: number;
  comments: object[] | null;
  author: IArticleAuthor;
  heroImage: string;
  category: string | null;
  publishedAt: Date;
  slug:string;
}
export interface IArticleAuthor {
  fullname: string;
  bio: StringOrNull;
  id: string;
  twitter: StringOrNull;
  profileImage: string;
  username:string;
  fullname:string;
}
export interface IArticlesResponse {
  message: string;
  status: number;
  articles: IArticles[];
}
export type StringOrNull = string | null;

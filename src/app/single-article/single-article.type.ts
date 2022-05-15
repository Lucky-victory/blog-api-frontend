export interface ISingleArticle{

    heroImage:string;
    views:number;
    title:string;
    slug:string;
    content:string;
    tags:string[];
    id:string;
    readTime:number;
    publishedAt:Date;
    category:string;
    commentsCount:number,
    author:IArticleAuthor
    
}
export interface IArticleAuthor {
    bio: StringOrNull;
    id: string;
    twitter: StringOrNull;
    profileImage: string;
    username:string;
    fullname:string;
    
  }
  export type StringOrNull = string | null;
import { Tag } from "./Tag";

export class Post
{
    public ID:number;
    public Title:string;
    public Slug:string;
    public Content:string;
    public Tags:Tag[];    
}
import { Injectable } from "@angular/core";
import { Post } from "./models/Post";
import { Tag } from "./models/Tag";

@Injectable({
    providedIn: 'root'
  })
export class WordpressUtil {

    public GetClasses(tags:Tag[]) : string[] {
        return tags.map(tag => tag.Value);
    }

    public ContainsTag(tags:Tag[], value:string) : boolean {
        return (tags.find(val => val.Value == value) != null);
    }
    public GetExpandedContent(expandedPosts:Post[],postSlug:string) : string {
        let post = expandedPosts.find(p => p.Slug = postSlug+'-expansion');
        return post.Content;
    }
}

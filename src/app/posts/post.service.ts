import { Injectable } from "@angular/core"
import { Post } from "./post.model"
import { _getOptionScrollPosition } from "@angular/material/core";

@Injectable({
  providedIn: "root"
})
export class PostsService{
  posts: Post[] = [];
  
  getPost(){
    return [...this.posts];
  }

  addPost(post: Post){
    this.posts.push(post);
  }

}

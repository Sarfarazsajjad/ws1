import { Injectable } from "@angular/core"
import { Post } from "./post.model"
import { _getOptionScrollPosition } from "@angular/material/core";
import { Subject } from 'rxjs'

@Injectable({
  providedIn: "root"
})
export class PostsService{
  posts: Post[] = [];
  postsUpdatedListener = new Subject<Post[]>();

  getPost(){
    return [...this.posts];
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postsUpdatedListener.next([...this.posts]);
  }

  getPostUpdateListner(){
    return this.postsUpdatedListener;
  }

}

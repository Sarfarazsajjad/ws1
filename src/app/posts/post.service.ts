import { Injectable } from "@angular/core";
import { Post } from "./post.model"
import { Subject } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http: HttpClient){
    
  }
  private posts: Post[] = []
  private postsUpdated = new Subject<Post[]>();
  getPosts() {
    this.http.get("http://localhost:3000/api/posts")
    .subscribe({next : (postData: {message:"string", posts: Post[]})=>{
      this.posts = postData.posts;

      this.postsUpdated.next([...this.posts]);
    }})
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}
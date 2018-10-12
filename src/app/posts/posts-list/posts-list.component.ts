import {Component, OnInit, OnDestroy} from "@angular/core"
import {Post} from "../post.model"
import {PostsService} from "../post.service"
import {Subscription} from "rxjs"

@Component({
  selector:'app-post-list',
  templateUrl: './posts-list.component.html',
  styleUrls:["./posts-list.component.css"]
})
export class PostsListComponent implements OnInit,OnDestroy{

  
  constructor(private postService: PostsService){}

  subscription: Subscription;
  posts: Post[] = []

  ngOnInit(){
    this.postService.getPosts();
    this.subscription = this.postService.getPostUpdateListner().subscribe({
     next: (posts: Post[])=>{ this.posts = posts},
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
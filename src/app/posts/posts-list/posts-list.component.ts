import {Component, Input} from "@angular/core"
import {Post} from "../post.model"

@Component({
  selector:'app-post-list',
  templateUrl: './posts-list.component.html',
  styleUrls:["./posts-list.component.css"]
})
export class PostsListComponent{
  @Input() posts: Post[] = [
    // {title:"post 1", content:"post 1 content"},
    // {title:"post 2", content:"post 2 content"},
    // {title:"post 3", content:"post 3 content"},
    // {title:"post 4", content:"post 4 content"},
  ]
}
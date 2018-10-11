import { Component,Output,EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms'
import {Post} from "../post.model"
@Component({
  selector:"app-posts-create",
  templateUrl:"./posts-create.component.html",
  styleUrls:["./posts-create.component.css"]
})
export class PostsCreateComponent{

  enteredTitle = '';
  enteredContent = '';

  @Output() createdPost = new EventEmitter;

  onSavePost(form : NgForm){
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    }

    this.createdPost.emit(post);

  }
}
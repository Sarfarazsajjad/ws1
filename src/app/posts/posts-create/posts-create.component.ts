import { Component,Output,EventEmitter } from "@angular/core";

@Component({
  selector:"app-posts-create",
  templateUrl:"./posts-create.component.html",
  styleUrls:["./posts-create.component.css"]
})
export class PostsCreateComponent{

  enteredTitle = '';
  enteredContent = '';

  @Output() createdPost = new EventEmitter;

  onSavePost(){
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }

    this.createdPost.emit(post);

  }
}
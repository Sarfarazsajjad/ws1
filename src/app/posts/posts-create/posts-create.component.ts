import { Component, Output, EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms'
import { Post } from "../post.model"
import { PostsService } from "../post.service";
@Component({
  selector: "app-posts-create",
  templateUrl: "./posts-create.component.html",
  styleUrls: ["./posts-create.component.css"]
})
export class PostsCreateComponent {

  enteredTitle = '';
  enteredContent = '';

  constructor(private postService:PostsService){}

  onSavePost(form: NgForm) {

    if (form.valid) {
      const post: Post = {
        title: form.value.title,
        content: form.value.content
      }
      this.postService.addPost(post);
      form.reset();
    }

  }
}
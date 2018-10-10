import { Component } from "@angular/core";

@Component({
  selector:"app-posts-create",
  templateUrl:"./posts-create.component.html"
})
export class PostsCreateComponent{

  post = 'No Content';
  enteredData = 'initial data';

  onSavePost(){
    
    this.post=this.enteredData;
  }
}
import { Component } from "@angular/core";

@Component({
  selector:"app-posts-create",
  templateUrl:"./posts-create.component.html",
  styleUrls:["./posts-create.component.css"]
})
export class PostsCreateComponent{

  post = 'No Content';
  enteredData = 'initial data';

  onSavePost(){
    
    this.post=this.enteredData;
  }
}
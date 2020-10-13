import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Page2';
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement) {
    // console.log(postInput);
    console.dir(postInput);
  }
}

import { Component } from '@angular/core';
import { Post } from './posts/post.model';      //! 3) import the Post model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];                     //! 1) Create our store
                                                  //+ 3.1) storedPosts: Post[] = [] this is how typescript syntax defining that storePosts got an array of Posts in there

  onPostAdded(post) {                           //! 2) Create a method to push to store
    this.storedPosts.push(post);
  }
}
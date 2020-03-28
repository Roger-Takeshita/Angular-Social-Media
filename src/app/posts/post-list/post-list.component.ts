import { Component, Input } from "@angular/core";   //! 1) Import Input
import { Post } from '../post.model';               //! 2) Import the Post Model

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    // posts = [
    //     { title: 'First Post', content: "This is the first post's content"},
    //     { title: 'Second Post', content: "This is the secont post's content"},
    //     { title: 'Third Post', content: "This is the thrid post's content"},
    //     { title: 'Fourth Post', content: "This is the fourth post's content"}
    // ];
    @Input() posts: Post[] = [];                        //+ 1.1) To make it bindable from outsid
                                                        //+ 2.1) Refactor the posts to use the Post Model
}
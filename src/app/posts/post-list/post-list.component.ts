import { Component, OnInit, OnDestroy} from "@angular/core";
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    constructor(public postsService: PostService) {
    }
    posts: Post[] = [];

    onDelete(id: string) {
        this.postsService.deletePost(id);
    }

    private postsSub: Subscription;
    ngOnInit() {
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
            this.posts = posts
        });
    }
    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}
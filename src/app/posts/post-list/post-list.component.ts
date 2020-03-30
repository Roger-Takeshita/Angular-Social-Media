import { Component, OnInit, OnDestroy} from "@angular/core";//! 1) Import Input             
                                                            //! 5) Remove Input and Import OnInit life cycle - componentDidMount
                                                            //! 8) Add another life cycle OnDestroy - componentWillUnmount
import { Post } from '../post.model';                       //! 2) Import the Post Model
import { PostService } from '../posts.service';             //! 4) Import PostService
import { Subscription } from 'rxjs';                        //! 7) Import Subscription

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {   //+ 5.1) To use the componentDidMount life cycle 
                                                                //+ 8.1) To use the componentWillUnmount life cycle
    //+ 4.1) Hard way -  To store a property
        // postService: PostService;                                //- 4.1.1) Store the posts in property of my class, create an instance of PostService
                                                                    //-        Also we have to import the PostService into 'app.module.ts' and add to providers array. Otherwise, Angular wont know about this new provider.
        // constructor(postService: PostService) {                  //- 4.1.2) pass a property postService: type PostService (instance of PostService)
        //     this.postService = postService;                          //? 4.1.2.1) then set the postService property of the class to postSerivice (that we are receiving)
        // }

    //+ 4.2) Easy way - To store a property
        constructor(public postsService: PostService) {             //- 4.2.1) Add the 'public' keyword, this will automatically create a new property in this component and store the incoming value in that property
                                                                    //-        We need to inject 'Injectable({providedIn: 'root'})' into 'post.services.ts' this way we dont need to add to 'app.module.ts' just in the like item 4.1.1
        }
    // posts = [
    //     { title: 'First Post', content: "This is the first post's content"},
    //     { title: 'Second Post', content: "This is the secont post's content"},
    //     { title: 'Third Post', content: "This is the thrid post's content"},
    //     { title: 'Fourth Post', content: "This is the fourth post's content"}
    // ];
    posts: Post[] = [];                                         //+ 1.1) To make it bindable from outside   5.2) Remove @Input decorator we dont need anymore
                                                                //+ 2.1) Refactor the posts to use the Post Model
    private postsSub: Subscription;                             //+ 7.1) Create a new instance of subscription and is undefined in the beginning
    ngOnInit() {                                                //+ 5.3) componentDidMount - Then we need to add this special method. Angular will automatically execute this command, when it creates this component
        this.postsService.getPosts();                               //- 5.3.1) We fetch our posts
        this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {    //! 6) Setting up a listener to the subject     //+ 7.2) then we set postsSub equals to the postService and the subscription that we are defining
            this.posts = posts                                                                          //+ 6.1) 'this.postsService.getPostUpdateListener()' this returns their observable
                                                                                                        //+ 6.2) .subscribe(), takes 3 arguments (callback emit, callback error, callback completed)
                                                                                                            //- callback emit, it's executed when new data is available
                                                                                                            //- callback error, it's executed when we got an error (this will never be the case here)
                                                                                                            //- callback completed, it's executed whenever the obeservable is completed, whenever ther are no more values to be expected (this will never be the case here, beacuse this is an infinetly living subject)
                                                                                                                //? In this case we are using just the emit part, we define a variable "posts" to the Post structure
        });
    }
    ngOnDestroy() {                                             //+ 8.1) componentWillUnmount - This is called whenver this component is about to get unmounted
        this.postsSub.unsubscribe();                                //- 8.1.1) So before unmounting this component, It will unsubscribe
    }
}
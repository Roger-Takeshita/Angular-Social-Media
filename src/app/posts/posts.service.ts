import { Post } from './post.model';                        //! 1) Import Post model (structure)
import { Injectable } from '@angular/core';                 //! 2) Import Injectable
import { Subject } from 'rxjs';                             //! 3) Import Subject - it's more or less an event emiter
import { HttpClient } from '@angular/common/http';          //! 6) Import Http Client
import { map } from 'rxjs/operators';                       //! 7) Import the map operator so we can use with pipe()

@Injectable({providedIn: 'root'})                               //+ 2.1) This makes angular aware of our service provider
                                                                //+      Instead of declaring into 'app.module.ts'>'providers'
                                                                //+      Inside the parenteses, we don't have to pass an argument, but we can pass a JavaScript object to configure this
                                                                //+ 2.2) In this case we are setting to the content of 'root'
                                                                //+      This will create only one instance of this service for the entire app. So wherever you enject this, we're going to use the same instance
export class PostService {
    private posts: Post[] = [];                                 //+ 1.1) Create a private variable with the Post structure
    private postsUpdate = new Subject<Post[]>();                //+ 3.1) Create a new instace of Subject, and pass a list of post as a payload

    constructor(private http: HttpClient) {                     //+ 6.1) Inject and automatically bind to a property using private with a type of HttpClient

    }

    getPosts() {                                                //+ 1.2) Create a getPost method
        this.http.get<{message: string, posts: any}>('http://localhost:3001/api/posts') //+ 6.1) Http GET Request
        .pipe(                                                  //+ 7.1) We can chain another method pipe() - we can manipulate the data before the subscription. pipe accepts multiple operators
            map((data) => {                                         //- 7.1.1) map operator from rxjs gets the data
                return data.posts.map((post) => {                       //? 7.1.1.1) create a map over an array of data
                    return {                                                //> 7.1.1.1.1) Returns a new object converting the _id to id
                        title: post.title,
                        content: post.content,
                        id: post._id
                    }
                })
            })
        )
        .subscribe((transformedData)=> {                                //- 6.1.1) The angular http client uses observables, for that we need to listen to the request using .subscribe()
                this.posts = transformedData;                           //-        We dont't need to store the subscription and unsubscribe from it (ngOnDestroy) beacause observables
                this.postsUpdate.next([...this.posts]);                 //-        connected to features built into angular like the http cliente, the unsubscription will be automatically
                                                                        //-        be handle for us by angular
            });
    }

    addPost(title: string, content: string) {                   //+ 1.3) Create an addPost method
        const post: Post = { id: null, title: title, content:content};
        this.http.post<{message: string, postId: string}>('http://localhost:3001/api/posts', post)  //+ 6.2) Http POST Request
        .subscribe((data) => {                                                                          //- 6.2.1) The angular http client uses observables, for that we need to listen to the request using .subscribe()   
                post.id = data.postId;
                this.posts.push(post);                          //+ 3.1) Update the post first
                this.postsUpdate.next([...this.posts]);         //+ 3.2) then pushes/emit a new value to our store
            })
    }

    deletePost(postId: string) {
        this.http.delete(`http://localhost:3001/api/posts/${postId}`)
        .subscribe(() => {
            const updatePosts = this.posts.filter((post) => post.id !== postId);
            this.posts = updatePosts;
            this.postsUpdate.next([...this.posts])
        })
    }

    getPostUpdateListener() {                                   //+ 3.3) New method to getUpdateListener
        return this.postsUpdate.asObservable();                     //- 3.3.1) .asObservable(), this returns an object where we can listen but we cant emit
                                                                    //- 3.3.2) we still can emit inside this file but we cant emit from where we are receiving this reference
    }
}
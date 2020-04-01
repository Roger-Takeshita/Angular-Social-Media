import { Component, OnInit } from '@angular/core';                                  //! 1) Import angular component decorator       //+ 7.1) Remove EventEmitter and Output
                                                                                    //! 3) Import EventEmitter - to create an event binding
                                                                                    //! 4) Import Output decorator - to make angular aware that we have an event that can be listened outside of this component
                                                                                    //!    We have to do this manualy because we rarely want to listen to events from the outside
                                                                                    //! 9) Import OnInit (componentDidMount)
import { NgForm } from '@angular/forms';                                            //! 6) Import NgForms type
import { PostService } from '../posts.service';                                     //! 7) Import postServices
import { ActivatedRoute, ParamMap } from '@angular/router';                         //! 8) Import the ActivatedRoute to get important informations from the current router
                                                                                        //+ 8.1) Import the ParamMap to check if we have a postId
import { Post } from '../post.model';                                               //! 10) Import the post model

                                                                                        //+ 1.1) Component decorator to attach to a class to mark as component
                                                                                        //+ 1.2) Then angular scans for certain features and uses as a component
@Component({                                                                            //+ 1.3) Component decorator, the component decorator takes some config in the form of java script object which we pass to it
                                                                                        //+      A typical component has a Selector and a Template
    selector: 'app-post-create',                                                            //- 1.3.1) Selector which allows us to use this component
    templateUrl: './post-create.component.html',                                            //- 1.3.2) Template
    styleUrls: ['./post-create.component.css']                                              //- 1.3.3) Style css
})

export class PostCreateComponent implements OnInit {                                //! 2) Export our class
                                                                                        //+ 9.1) Implements the OnInit
    enteredTitle = "";                                                                  //+ 2.1) Create a new variable to hold the title 
    enteredContent = '';                                                                //+ 2.2) Re-name this variable so we don't confuse ourselves
    private mode = 'create';                                                            //+ 8.2) Create a private mode just to check if we are in create or edit mode
    private postId: string;                                                             //+ 8.3) Create a private varible type string and initially undefined
    post: Post;                                                                         //+ 10.1) Create a public varible type Post

    constructor(public postService: PostService, public route: ActivatedRoute) {        //+ 7.2) Add the 'public' keyword, this will automatically create a new property in this component and store the incoming value in that property
                                                                                        //+      We need to inject 'Injectable({providedIn: 'root'})' into 'post.services.ts'
                                                                                        //+ 8.4) Bind the ActivatedRoute to a public variable
    }
    
                                                                                        //+ 7.3) Remove the Output decorator and emiter
    onSavePost(form: NgForm) {                                                           //+ 6.1) NgForm Type
        if (form.invalid) return;                                                       //+ 6.1) We can check if the form is invalid
        if (this.mode == 'create') {
            this.postService.addPost(form.value.title, form.value.content);                 //+ 7.2) Refactor to push data to our store, we are not using emit anymore
        } else {
            this.postService.updatePost(this.postId, form.value.title, form.value.content);
        }
        form.resetForm();                                                               //+ 7.3) Just to reset the form after submiting
    }
    
    ngOnInit() {                                                                        //+ 9.1) Create ngOnInit() method
        this.route.paramMap.subscribe((paramMap: ParamMap) => {                         //+ 8.5) Create paramMap variable type ParamMap
            if (paramMap.has('postId')) {                                                   //- 8.5.1) HAS - check if paramMap has a postId
                this.mode = 'edit';
                this.postId = paramMap.get('postId');                                       //- 8.5.2) GET - get the 'postId' - this is the same variable that we defined on our routes (:postId)
                this.postService.getPost(this.postId).subscribe((data) => {                 //- 8.5.3) With de postId, we call postService.getPost() to make http request then we subscribe to listen to changes (in the postService we didn't subscribe there thats why we are subscribing here)
                    this.post = { id: data._id, title: data.title, content: data.content }  //- 8.5.4) Then we set the post to this new object that we are receiving from the server, so we can user in our html
                });
            } else {
                this.mode = 'create';
                this.postId = null;
            }
        })
    }
}
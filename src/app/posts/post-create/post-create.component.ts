import { Component, EventEmitter, Output } from '@angular/core';                    //! 1) Import angular component decorator
                                                                                    //! 3) Import EventEmitter - to create an event binding
                                                                                    //! 4) Import Output decorator - to make angular aware that we have an event that can be listened outside of this component
                                                                                    //!    We have to do this manualy because we rarely want to listen to events from the outside
import { Post } from '../post.model';                                               //! 5) Import the Post Model


                                                                                        //+ 1.1) Component decorator to attach to a class to mark as component
                                                                                        //+ 1.2) Then angular scans for certain features and uses as a component
@Component({                                                                            //+ 1.3) Component decorator, the component decorator takes some config in the form of java script object which we pass to it
                                                                                        //+      A typical component has a Selector and a Template
    selector: 'app-post-create',                                                            //- 1.3.1) Selector which allows us to use this component
    templateUrl: './post-create.component.html',                                            //- 1.3.2) Template
    styleUrls: ['./post-create.component.css']                                              //- 1.3.3) Style css
})

export class PostCreateComponent {                                                  //! 2) Export our class
    enteredTitle = "";                                                                  //+ 2.1) Create a new variable to hold the title 
    enteredContent = '';                                                                //+ 2.2) Re-name this variable so we don't confuse ourselves
    @Output() postCreated = new EventEmitter<Post>();                                   //+ 3.1) Create a new event binding
                                                                                        //+ 5.2) <Post> we are defining the generic type - this will only emit posts, otherwise, we'll get an error
                                                                                        //+ 4.1) @Output - to make angular aware that we have an event that can be listened outside of this component
    onAddPost() {
        const post: Post = { title: this.enteredTitle, content: this.enteredContent };  //+ 5.1) Refactor the post variable to use the Post Model
        this.postCreated.emit(post);                                                    //+ 3.2) Then we call the postCreated.emit() to emit a new event             
    }
}
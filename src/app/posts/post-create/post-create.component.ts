import { Component } from '@angular/core';                                          //! 1) Import angular component decorator       //+ 7.1) Remove EventEmitter and Output
                                                                                    //! 3) Import EventEmitter - to create an event binding
                                                                                    //! 4) Import Output decorator - to make angular aware that we have an event that can be listened outside of this component
                                                                                    //!    We have to do this manualy because we rarely want to listen to events from the outside
import { NgForm } from '@angular/forms';                                            //! 6) Import NgForms type
import { PostService } from '../posts.service';                                     //! 7) Import postServices


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
    constructor(public postService: PostService) {                                      //+ 7.2) Add the 'public' keyword, this will automatically create a new property in this component and store the incoming value in that property
                                                                                        //+      We need to inject 'Injectable({providedIn: 'root'})' into 'post.services.ts'
    }
    
                                                                                        //+ 7.3) Remove the Output decorator and emiter
    onAddPost(form: NgForm) {                                                           //+ 6.1) NgForm Type
        if (form.invalid) return;                                                       //+ 6.1) We can check if the form is invalid
        this.postService.addPost(form.value.title, form.value.content);                 //+ 7.2) Refactor to push data to our store, we are not using emit anymore
        form.resetForm();                                                               //+ 7.3) Just to reset the form after submiting
    }
}
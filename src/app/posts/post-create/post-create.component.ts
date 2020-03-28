import { Component, EventEmitter, Output } from '@angular/core'; //! 1) Import angular component decorator

                                                    //+ 1.1) Component decorator to attach to a class to mark as component
                                                    //+ 1.2) Then angular scans for certain features and uses as a component
@Component({                                        //+ 1.3) Component decorator, the component decorator takes some 
                                                    //+      config in the form of java script object which we pass to it
                                                    //+      A typical component has a Selector and a Template
    selector: 'app-post-create',                        //- 1.3.1) Selector which allows us to use this component
    templateUrl: './post-create.component.html',        //- 1.3.2) Template
    styleUrls: ['./post-create.component.css']          //- 1.3.3) Style css
})

export class PostCreateComponent {              //! 2) Export our class
    enteredTitle = "";
    enteredContent = '';
    @Output() postCreated = new EventEmitter();
    onAddPost() {
        const post = { title: this.enteredTitle, content: this.enteredContent };
        this.postCreated.emit(post);                                      
    }
}
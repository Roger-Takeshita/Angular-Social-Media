<h1 id='summary'>Summary</h1>

* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)
* [       ](#xxxxxxxxxxx)

<h1 id='MEAN - Angular Social Media'></h1>

<h2 id='installation'>Installation</h2>

[Go Back to Summary](#summary)

* Create a new angular project

  * `ng new Angular-Social-Media`

* Development server

  * Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
  * This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

* Code scaffolding

  * Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

* Build

  * Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Running unit tests

  * Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* Running end-to-end tests

  * Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

* Further help

  * To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<h2 id='components'>Components</h2>

<h3 id='createcomponent'>How to Create a Component</h3>

[Go Back to Summary](#summary)

* To create a new componet, we create inside the `src/app`.
* There we create the component structure (folder and files)

  ```Bash
    touch src/app/posts/post-create/post-create.components.html
    touch src/app/posts/post-create/post-create.components.ts
    touch src/app/posts/post-create/post-create.components.css
  ```

  ```Bash
    .
    └── app
        └── posts
            └── post-create
                ├── post-create.components.css
                ├── post-create.components.html
                └── post-create.components.ts
  ```

* In `post-create.components.html`
  * Create a simple h2 tag, just to display anything

  ```HTML
    <h2>The post create component</h2>
  ```

* In `post-create.components.ts`
  * Import the angular component decorator `Component` from `@angular/core`

  ```JavaScript
    import { Component } from '@angular/core';
  ```

  * Create a `Component` decorator and attach to class object
    * The component decorator takes some configuration in the form of a javascript object
    * A typical component has a `selector` and a `templateUrl`

  ```JavaScript
      import { Component } from '@angular/core'; //! 1) Import angular component decorator

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

      } 
  ```

<h3 id='usecomponent'>How to Declare a Component</h3>

[Go Back to Summary](#summary)

* To use a component, first we have to declare, otherwise, Angular won't know about this new component.

* In `src/app/app.module.ts`
  * We have to import the component, in this case our `post-create.component`
  * And we have to declare, inside the `declarations` array:
  
  ```JavaScript
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';

      import { AppComponent } from './app.component';
      import { PostCreateComponent } from './posts/post-create/post-create.component'; //! 1) We need to import the component (the class that we exported)

      @NgModule({
        declarations: [
          AppComponent,
          PostCreateComponent   //+ 1.1) Then we need to declare the component (that all we need do to use a component)
        ],
        imports: [
          BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
  ```

<h3 id='usecomponent'>How to Use a Component</h3>

[Go Back to Summary](#summary)

* In `src/app/app.component.html`
  * After all those steps to use a component, we just need to create a its own tag

  ```HTML
      <h1>Hello world!</h1>
      <app-post-create></app-post-create>
  ```

<h2 id='createmethod'>Create a Function/Method</h2>

[Go Back to Summary](#summary)

* In `src/app/posts/post-create/post-create.component.ts`
* Inside the class `export class PostCreateComponent {}` we create our method

  ```JavaScript
    export class PostCreateComponent {              //! 2) Export our class
        onAddPost() {                                   //+ 2.1) Method Post, we use "on" in the beginning of the fcuntion
                                                        //+      To identify as an event like onClick 
            alert(' Post added');
        }
    } 
  ```

<h2 id='createpostform'>Create a Post Form</h2>

[Go Back to Summary](#summary)

* In `src/app/posts/post-create/post-create.component.html`
  * Let's create our post form, for that, delete the h2 tag and add

  ```HTML
      <textarea rows="6"></textarea>
      <hr>
      <button (click)="onAddPost()">Save Post</button>
  ```

  * Event binding is an angular feature which allows us to listten to events in a declarative way, which means instead of using javascript where we would go to our code and then try to select the element with query selector, and then use addEventListener on the element.
  * Instead doing all that programmatically, we go to our template ans we add something there which is **not** default html which is understood by angular --> `(click)`

  ```JavaScript
      (click)="typescript-code"
      
      // (click)          - it is the event listener
      // typescript-code  - it is the function/method that we want to be executed
  ```

* With that being explained, now we can actually create our form

  * In `post-create.component.html`

  ```HTML
      <textarea rows="6" [value]="newPost"></textarea>
      <hr>
      <button (click)="onAddPost()">Save Post</button>
      <p>{{ newPost }}</p>
  ```

    * `{{ newPost }}`  --> String interpolation
      * We can refer to something that is stored in our class (this could be a method or a property)
    * `[value]`        --> Angular allows us to directly target properties of the underlying objects of the html elements
      * If we know the name of the property, we can directly target that property using `[]`.
      * In this case, this will now directley target the **value** porperty of the underlying object and bind the value between quotation marks to it
        * `[property-name]="typescript-code"`
        * To output as a string, we have to wrap it with single quotations marks `[property-name]="'This is a String'"`

  * In `post-create.component.ts`

  ```JavaScript
      export class PostCreateComponent {              //! 2) Export our class
          newPost = 'No Content';                         //+ 2.1) We create a variable to hold the information from the text area
          onAddPost() {                                   //+ 2.2) Method Post, we use "on" in the beginning of the fcuntion
                                                          //+      To identify as an event like onClick 
              this.newPost = `The user's post`;           
          }
      }
  ```

<h3 id='propertybinding'>Property Binding</h3>

[Go Back to Summary](#summary)

* We can add a marker, a variable to any html element we want
* we just need to add a **#** before the variable, for example `#postInput`
* This marks create a reference to the element so we can use in this template
  * In this case we are getting the textarea object and passing as an argument to `onAddPost()`
  * To access the valeu, we can use `data.value`

  * In `post-create.component.html`

  ```HTML
      <textarea rows="6" [value]="newPost" #postInput></textarea>
      <hr>
      <button (click)="onAddPost(postInput)">Save Post</button>
      <p>{{ newPost }}</p>
  ```

  * In `post-create.component.ts`

  ```JavaScript
      export class PostCreateComponent {              //! 2) Export our class
          newPost = '';                                   //+ 2.1) We create a variable to hold the information from the text area
          onAddPost(postInput: HTMLTextAreaElement) {     //+ 2.2) Method Post, we use "on" in the beginning of the fcuntion
                                                          //+      To identify as an event like onClick 
              this.newPost = postInput.value;           
          }
      }
  ```
    * we could add and HTML type to `data`, this just informs the typescript about the type. This gives us better auto-completion because the IDE knows which kind of type that is

<h3 id='twowaybinding'>Two-way Binding</h3>

[Go Back to Summary](#summary)

* Rather than manually setting the value of the textarea and also getting a reference to it and so on.
* We can get rid of both with a feature that combines the `setting` and the `reading` of a value
* `[(ngModel)]`, **ngmodel** is an Angular feature, it's a so-called **diretive**.
  * A **directive** is basically an instruction you place on an html element and angular or you can create your own one so that the relative knows what to do on that element
  * **ngModel** is a directive that actally will listen to user input and **emit that data** to use and also **store** new data or output it there
  * We need to bind to a property, so we don't need to update later

  * In `post-create.component.html`

  ```HTML
      <textarea rows="6" [(ngModel)]="enteredValue"></textarea>
      <hr>
      <button (click)="onAddPost()">Save Post</button>
      <p>{{ newPost }}</p>
  ```

  * In `post-create.component.ts`

  ```JavaScript
    export class PostCreateComponent {              //! 2) Export our class
        enteredValue = '';                              //+ 2.3) creating a new variable to store the entered value
        newPost = '';                                   //+ 2.1) We create a variable to hold the information from the text area
        onAddPost() {                                   //+ 2.2) Method Post, we use "on" in the beginning of the fcuntion
                                                        //+      To identify as an event like onClick 
            this.newPost = this.enteredValue;           
        }
    }
  ```

* **ngModel** by default won't work
* It's a feature that is not inclued in the core angulra package
* It's not included in the `browserModule`, it's included in a different model what we need to add

* in `src/app/app.module.ts`:
  * Include the `ngModel` from `FormsModule` from `@angular/forms`

  ```JavaScript
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { FormsModule } from '@angular/forms';                                   //! 2) Import Forms

      import { AppComponent } from './app.component';
      import { PostCreateComponent } from './posts/post-create/post-create.component'; //! 1) We need to import the component (the class that we exported)

      @NgModule({
        declarations: [
          AppComponent,
          PostCreateComponent   //+ 1.1) Then we need to declare the component (that all we need do to use a component)
        ],
        imports: [
          BrowserModule,
          FormsModule           //+ 2.1) Import the FormsModule, now we are unlocking some form features, and ngModel is one of them
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
  ```

<h3 id='corefeatures'>Core Features of Angular</h3>

[Go Back to Summary](#summary)

* Event binding         --> `(click)="onAddPost()"`
* String interporlation --> `{{ newPost }}`
* Property binding      --> `[value]="newPost" #postInput`
* Two-way binding       --> `[(ngModel)]="enteredValue"`

<h2 id='angularmaterial'>Angular Material</h2>

[Go Back to Summary](#summary)

* `ng add @angular/material` -> This command will install and config itself
  * Choose your template
  * Animation: yes

* Then after installing the Angular Material, we need to update our app module

* In `src/app/app.module.ts`
  * Import the `MatInputModule` that we are going to use to create our angular input
  * Import the `MatCardModule` too

  ```JavaScript
      import { BrowserModule } from '@angular/platform-browser';
      import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
      import { NgModule } from '@angular/core';
      import { FormsModule } from '@angular/forms';                                    //! 2) Import Forms
      import { MatInputModule } from '@angular/material/input';                        //! 3) Import Input from Material (using Material v9 or above)
      import { MatCardModule } from '@angular/material/card';                          //! 4) Import Card Module fom Material
      import { MatButtonModule } from '@angular/material/button';                      //! 5) Import Button Module from Material
      import { MatToolbarModule } from '@angular/material/toolbar';                    //! 6) Import Toolbar Module from Material

      import { AppComponent } from './app.component';
      import { PostCreateComponent } from './posts/post-create/post-create.component'; //! 1) We need to import the component (the class that we exported)
      import { HeaderComponent } from './header/header.component';                     //! 7) Import the header component

      @NgModule({
        declarations: [
          AppComponent,
          PostCreateComponent,      //+ 1.1) Then we need to declare the component (that all we need do to use a component)
          HeaderComponent           //+ 7.1) Declare the header component
        ],
        imports: [
          BrowserModule,
          FormsModule,
          BrowserAnimationsModule,  //+ 2.1) Import the FormsModule, now we are unlocking some form features, and ngModel is one of them
          MatInputModule,           //+ 3.1) Import the MatInputModule
          MatCardModule,            //+ 4.1) Import the MatCardModule
          MatButtonModule,          //+ 5.1) Import the MatButtonModule
          MatToolbarModule          //+ 6.1) Import the MatToolbarModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
  ```
  * Notice: that after we installed the material, our 

* To use the new angular input
  * In `post-create.component.html`
  
  ```HTML
      <mat-card>
          <mat-form-field>
              <textarea matInput rows="6" [(ngModel)]="enteredValue"></textarea>
          </mat-form-field>
      <button (click)="onAddPost()">Save Post</button>
      </mat-card>
      <p>{{ newPost }}</p>
  ```

<h2 id='style'>Style CSS</h2>

[Go Back to Summary](#summary)

* In `src/app/posts/post-create/post-create.components.css`
  * Let's add some style to our component
  * This styles won't scape form this component to another component. It only applies to this component
  
  ```CSS
      mat-card {
          width: 80%;
          margin: auto;
      }

      mat-form-field,
      textarea {
          width: 100%;
      }
  ```

<h2 id='toolbar'>Toolbar Component</h2>

[Go Back to Summary](#summary)

* Create a new component named `header`

  ```Bash
    .
    └── src
        └── app
            └── header
                ├── header.component.css
                ├── header.component.html
                └── header.component.ts
  ```

* in `header.component.html`

  ```HTML
    <mat-toolbar color="primary">MyMessages</mat-toolbar>
  ```

* in `header.component.ts`

  ```JavaScript
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
    export class HeaderComponent {

    }
  ```

* in `app.module.ts` declare the new component

  ```JavaScript
    import { HeaderComponent } from './header/header.component';                     //! 7) Import the header component

    ...
    
    declarations: [
      AppComponent,
      PostCreateComponent,      //+ 1.1) Then we need to declare the component (that all we need do to use a component)
      HeaderComponent           //+ 7.1) Declare the header component
    ],
  ```

<h2 id='outputdata'>Output Data From Component</h2>

* in `post-create.component.ts`
  * To ouput data from a component, we can use the property and event binding
  * We can emit our own events
  * We can send data into a component

  ```TypeScript
      import { Component, EventEmitter, Output } from '@angular/core';                    //! 1) Import angular component decorator
                                                                                          //! 3) Import EventEmitter - to create an event binding
                                                                                          //! 4) Import Output decorator - to make angular aware that we have an event that can be listened outside of this component
                                                                                          //!    We have to do this manualy because we rarely want to listen to events from the outside

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
          @Output() postCreated = new EventEmitter();                                         //+ 3.1) Create a new event binding
                                                                                              //+ 4.1) @Output - to make angular aware that we have an event that can be listened outside of this component
          onAddPost() {
              const post = { title: this.enteredTitle, content: this.enteredContent };
              this.postCreated.emit(post);                                                    //+ 3.2) Then we call the postCreated.emit() to emit a new event             
          }
      }
  ```

* in `post-create.component.html`
  
* Bind the new **two-way binding** to the `input`
* Update the `textarea` and `button` eventListener
  
  ```HTML
      <mat-card>
          <mat-form-field>
              <input matInput type="text" [(ngModel)]="enteredTitle">
          </mat-form-field>
          <mat-form-field>
              <textarea matInput rows="6" [(ngModel)]="enteredContent"></textarea>
          </mat-form-field>
          <button mat-raised-button color="accent" (click)="onAddPost()">Save Post</button>
      </mat-card>
  ```

* We need to store the posts that we are going to get from our child component

* in `app.component.ts`
  * We need to create an array to hold all the posts
  * And we need to create a method to push to this array 

  ```TypeScript
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      })
      export class AppComponent {
        storedPosts = [];                             //! 1) Create our store

        onPostAdded(post) {                           //! 2) Create a method to push to store
          this.storedPosts.push(post);
        }
      }
  ```

* Now we can access to `postCreated` in our parent component and created a store

* in `app.component.html`
* In the component that we are using the component `<app-post-create>`
  * We now can use the event binding to listen to postCreated `(postCreated)="onPostAdded($event)`
  * And connect to the `onPostAdded()`, the method that we created to push our data to the store

  ```TypeScript
      (postCreated)="onPostAdded($event)

      // (postCreated) -> Event binding to listen to postCreated that we are outputing
      // onPostAdded() -> Connects to the function
      // $event        -> Gives we access to the data that we emited
      //                  Here we get a normal DOM event object
  ```

  ```HTML
      <app-header></app-header>
      <main>
          <app-post-create (postCreated)="onPostAdded($event)"></app-post-create>
          <app-post-list"></app-post-list">
      </main>
  ```

<h2 id='inputdata'>Input Data To Component</h2>

<h3 id='postlistcomponent'>Post List Component</h3>

[Go Back to Summary](#summary)

* Frist lets create a post-list.component

  ```Bash
    .
    └── src
        └── app
            └── posts
                └── post-list
                    ├── post-list.component.css
                    ├── post-list.component.html
                    └── post-list.component.ts
  ```

* in `post-list.component.ts`

  ```TypeScript
      import { Component} from "@angular/core";

      @Component({
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
      })
      export class PostListComponent {
          posts = [
              { title: 'First Post', content: "This is the first post's content"},
              { title: 'Second Post', content: "This is the secont post's content"},
              { title: 'Third Post', content: "This is the thrid post's content"},
              { title: 'Fourth Post', content: "This is the fourth post's content"}
          ];
      }
  ```

* in `post-list.component.html`

  ```HTML
      <mat-accordion multi="true" *ngIf="posts.length > 0">
          <mat-expansion-panel *ngFor="let post of posts">
              <mat-expansion-panel-header>
                  {{ post.title }}
              </mat-expansion-panel-header>
              <p>{{ post.content }}</p>
          </mat-expansion-panel>
      </mat-accordion>
      <p class="info-text mat-body-1" *ngIf="posts.length === 0">No Posts Added Yet!</p>
  ```

  * `ngModel` -> only apply to a single element
  * `*ngFor`  -> Create a for loop statement

  ```TypeScript
      *ngFor="let your-variable of data"

      // *             -> It's important
      // your-variable -> It can be any variable/name same as "for (let item of items){}"
      // data          -> Needs to be the same variable/name from our component
  ```

  * `*ngIf`   -> Create an if loop statement

  ```TypeScript
      *ngIf="your-condition-here"

      // *                  -> It's important
      // your-conditionhere -> could be a variable from our component or a property (.length) 
  ```

* in `post-list.component.css`

  ```CSS
    :host {
        display: block;
        margin-top: 1rem;
    }

    .info-text {
        text-align: center;
    }
  ```

<h3 id='makingbindable'>Making Bindable From Outsite</h3>

[Go Back to Summary](#summary)

* By default the component is not bindable from outside, but we can make it bindable by adding a decorator `@Input()` to it.

  ```TypeScript
      import { Component, Input } from "@angular/core";   //! 1) Import Input

      @Component({
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
      })
      export class PostListComponent {
          @Input() posts = [];                                //+ 1.1) To make it bindable from outsid
      }
  ```

* Now from outside we can bind the `posts` to our `post store`

* in `app.component.html`

  ```HTML
      <app-header></app-header>
      <main>
          <app-post-create (postCreated)="onPostAdded($event)"></app-post-create>
          <app-post-list [posts]="storedPosts"></app-post-list>
      </main>
  ```
  * Now angula's chance detection will automatically detect whenever a new post is created and when it needs to render this new post

<h2 id='angularpostmodel'>Angular's Post Model</h2>

[Go Back to Summary](#summary)

* A model is a blueprint, which allows us to define how a post looks like in our angular application.
* This helps us to easly identify the structure of the post (title, content ...)
* In our `src/app/posts` lets create our model

  ```Bash
      touch src/app/posts/post.model.ts
  ```

* in `post.model.ts`
  * We'll use another TypeScript feature called `interface`
  * An `interface` is like a **class** that defines how an object looks like, but **it can't be instatiated**
    * It's more like a `contract`, we can use it to create our own type, to force a certain object to look like this even though we can't directly create it based on the interface

  ```TypeScript
      export interface Post {
          title: string;                // field: type
          content: string;              // field: type
      }
  ```
  * now we can import into our components

* in `app.component.ts`

  ```TypeScript
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
  ```

  * if we try to add `this.storedPosts.push(3)` we will get an warning saying 
    * >"Argument of type '3' is not assignable to parameter of type 'Post'"
  * but this `this.storedPosts.push({title: "my new title", content:"post content"});` will work fine

  * So we can update all the components that we have a post
  * in `post-list.component.ts`

  ```TypeScript
      import { Component, Input } from "@angular/core";   //! 1) Import Input
      import { Post } from '../post.model';               //! 2) Import the Post Model

      @Component({
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
      })
      export class PostListComponent {
          @Input() posts: Post[] = [];                        //+ 1.1) To make it bindable from outsid
                                                              //+ 2.1) Refactor the posts to use the Post Model
      }
  ```
  * in `post-create.component.ts`

  ```TypeScript
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
  ```
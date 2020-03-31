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

<h2 id='addingforms'>Adding Forms</h2>

[Go Back to Summary](#summary)

* in `src/app/posts/post-create/post-create.component.html`

* wrap the form fields and button with a `<form>` tag
* When angular detecs a `<form>` element, we also need to incude the `FormsModule` in `app.module.ts` (which we already did)
  * It automatically creates a JavaScript object behind the scenes which represents thsi form
  * Then we can easily register inputs as controls of which it will keep track of
  * I will then store the values of theses controls
  * We can easily add validations, submit the form and use the values of the form

* 1 - To do so, we need to remove the **two-way binding** and overwrite with a **directive** without any bindings
  * 1.1 -`[(ngModel)]="variable"` ---> `ngModel`
  * 1.2 - the `ngModel` will register the input (<tag>) as a control to this behind the scenes form
* 2 - We need to give a name attribube `name="custon-name"`
* 3 - Change `(click)="onAddPost()` to `type="submit"`
* 4 - Add an eventListener to the from `(submit)="onAddPost()`
  * 4.1 - **Angular will automatically prevent the default**
* 5 - Add a reference to the form, so we can access the value outside
  * 5.1 - `#reference-name="ngForm"` ---> `#postForm="ngForm"`
  * 5.2 - Then we need to pass this object reference to `(submit)="onAddPost(postForm)`
* 6 - Adding an errro message, add `<mat-error>` below the form
  * 6.1 - To do that, we need to create **local references** to each element that we want to create a custom erro msg
  * 6.2 - `#title="ngModel"` and `#content="ngModel"`
  
  ```HTML
      <mat-card>
      <form action="">
          <mat-form-field (submit)="onAddPost(postForm)" #postForm="ngForm">
              <input
                matInput
                type="text"
                name="title"
                #title="ngModel"
                ngModel
                required>
              <mat-error *ngIf="title.invalid">Invalid title</mat-error>
          </mat-form-field>
          <mat-form-field>
              <textarea
                matInput
                rows="6"
                name="content"
                #content="ngModel"
                ngModel
                required></textareamatInput>
              <mat-error *ngIf="content.invalid">Invalid content</mat-error>
          </mat-form-field>
          <button mat-raised-button color="accent" type="submit">Save Post</button>
      </form>
      </mat-card>
  ```

* in `src/app/posts/post-create/post-create.component.ts`

* Now that we are receiving the `postForm` object from our HTML, we need to refactor our class
* 1 - Import the **NgForm** from `@angular/forms`;
* 2 - Refactor the `onAddPost()` function to receive `form: type NgForm`
  * 2.1 - We can check if the form is `invalid`
  * 2.2 - Adjust the values so we can get from the form object that we are using now

  ```TypeScript
      import { Component, EventEmitter, Output } from '@angular/core';                    //! 1) Import angular component decorator
                                                                                          //! 3) Import EventEmitter - to create an event binding
                                                                                          //! 4) Import Output decorator - to make angular aware that we have an event that can be listened outside of this component
                                                                                          //!    We have to do this manualy because we rarely want to listen to events from the outside
      import { Post } from '../post.model';                                               //! 5) Import the Post Model
      import { NgForm } from '@angular/forms';                                            //! 6) Import NgForms type


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
          onAddPost(form: NgForm) {                                                           //+ 6.1) NgForm Type
              if (form.invalid) return;                                                       //+ 6.1) We can check if the form is invalid
              const post: Post = { title: form.value.title, content: form.value.content };    //+ 5.1) Refactor the post variable to use the Post Model -> 6.2) Refactor the variables to get form.values.field
              this.postCreated.emit(post);                                                    //+ 3.2) Then we call the postCreated.emit() to emit a new event             
          }
      }
  ```

<h2 id='service'>Service - Easy Way to Pass Information</h2>

[Go Back to Summary](#summary)

* A **service** is a **class** which you add to our angular application, this allows us to `inject` into the component, which is able to centralize some tasks and provide easy acess to data from within different components without property and event binding.
  * A **service** is just a **TypeScript class**

* create the following file

  ```Bash
    src/app/posts/posts.service.ts
  ```

  ```Bash
    .
    └── src
        └── app
            └── posts
                └── posts.service.ts
  ```

* in `posts.service.ts`

  ```TypeScript
      import { Post } from './post.model';                        //! 1) Import Post model (structure)

      export class PostService {
          private posts: Post[] = [];                                 //+ 1.1) Create a private variable with the Post structure

          getPosts() {                                                //+ 1.2) Create a getPost method
              return [...this.posts];
          }

          addPost(title: string, content: string) {                   //+ 1.3) Create an addPost method
              const post: Post = {title: title, content:content};
              this.posts.push(post);
          }
      }
  ```

<h3 id='dependencyinjection'>Dependency Injection</h3>

[Go Back to Summary](#summary)

* This means that we simply go to the component that we want to use it
* And add a `constructor()`
  * In the constructor we expect to receive some arguments, but since angular is the one creating new instances of the component. **Angular has to give you these arguments** and angular has a complex dependency injection system which is able to finde out what you want and indeed give you that.
* We need to import the `post.service` that we created

* in `post.service.ts`

  ```TypeScript
      import { Post } from './post.model';
      import { Injectable } from '@angular/core';                 //! 2) Import Injectable

      @Injectable({providedIn: 'root'})                               //+ 2.1) This makes angular aware of our service provider
                                                                      //+      Instead of declaring into 'app.module.ts'>'providers'
                                                                      //+      Inside the parenteses, we don't have to pass an argument, but we can pass a JavaScript object to configure this
                                                                      //+ 2.2) In this case we are setting to the content of 'root'
                                                                      //+      This will create only one instance of this service for the entire app. So wherever you enject this, we're going to use the same instance
      export class PostService {
          private posts: Post[] = [];

          getPosts() {
              return [...this.posts];
          }

          addPost(title: string, content: string) {
              const post: Post = {title: title, content:content};
              this.posts.push(post);
          }
      }
  ```

<h4 id='gettingposts'>Post-List Constructor</h4>

* in `post-list.component.ts`
  * We need to import the PostService
  * Then we create a constructor to store the incoming value (just like useState)
  
  ```TypeScript
      import { Component, Input } from "@angular/core";
      import { Post } from '../post.model';
      import { PostService } from '../posts.service';             //! 4) Import PostService

      @Component({
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
      })
      export class PostListComponent {
          //+ 4.1) Hard way -  To store a property
              // postService: PostService;                            //- 4.1.1) Store the posts in property of my class, create an instance of PostService
                                                                      //-        Also we have to import the PostService into 'app.module.ts' and add to providers array. Otherwise, Angular wont know about this new provider.
              // constructor(postService: PostService) {              //- 4.1.2) pass a property postService: type PostService (instance of PostService)
              //     this.postService = postService;                      //? 4.1.2.1) then set the postService property of the class to postSerivice (that we are receiving)
              // }

          //+ 4.2) Easy way - To store a property
              constructor(public postsService: PostService) {         //- 4.2.1) Add the 'public' keyword, this will automatically create a new property in this component and store the incoming value in that property
                                                                      //-        We need to inject 'Injectable({providedIn: 'root'})' into 'post.services.ts' this way we dont need to add to 'app.module.ts' just in the like item 4.1.1
              }
          @Input() posts: Post[] = [];
      }
  ```

<h1 id='lifecycle'>Angular's Life Cycle</h1>

<h2 id='oninit'>OnInit - componentDidMount</h2>

[Go Back to Summary](#summary)

* `OnInit` is imported from `@angular/core`
* To use:
  1. we need to **implements** on our class
  2. and we are required to add a special method to our class `ngOnInit(){}` 
    * Angular will automatically execute this command, when it creates this component (similar to componentDidMount)

<h3 id='postlistgetpost'>Post-List Connecting to GET Post</h3>

[Go Back to Summary](#summary)

* in `post-list.component.ts`

  ```TypeScript
    import { Component, OnInit } from "@angular/core";      //! 5) Remove Input and Import OnInit life cycle
    import { Post } from '../post.model';
    import { PostService } from '../posts.service';

    @Component({
        selector: 'app-post-list',
        templateUrl: './post-list.component.html',
        styleUrls: ['./post-list.component.css']
    })

    export class PostListComponent implements OnInit {          //+ 5.1) To use the life cycle, firs we need to implements
        constructor(public postsService: PostService) {

        }
        posts: Post[] = [];                                             //+ 5.2) Remove @Input decorator we dont need anymore           
        ngOnInit() {                                            //+ 5.3) Angular will automatically execute this command, when it creates this component
            this.posts = this.postsService.getPosts();              //- 5.3.1) We fetch our posts
        }
    }
  ```

* in `post-list.component.html`
  * Add `EDIT` and `DELETE` button below the content. We'll add the functions later

  ```HTML
      <p>{{ post.content }}</p>
      <mat-action-row>
          <button mat-button color="primary">EDIT</button>
          <button mat-button color="warn">DELETE</button>
      </mat-action-row>
  ```

<h3 id='postcreategetpost'>Post-Create Connecting to GET Post</h3>

[Go Back to Summary](#summary)

* Let's refactor to use the `easy way` (constructor) to store local data (useState), and get the posts from our store through `postService`.
* Since we don't need anymore the `post.model` we can delete it. We are going to use the `postService` to create our new post.
* in `post-create.component.ts`

  ```TypeScript
      import { Component } from '@angular/core';                                          //! 1) Import angular component decorator       //+ 7.1) Remove EventEmitter and Output
                                                                                              //+ 7.2) Remove the post.model, we dont need the post structure anymore 
      import { NgForm } from '@angular/forms';
      import { PostService } from '../posts.service';                                     //! 7) Import postServices

      @Component({
          selector: 'app-post-create',
          templateUrl: './post-create.component.html',
          styleUrls: ['./post-create.component.css']
      })

      export class PostCreateComponent {
          enteredTitle = "";
          enteredContent = '';
          constructor(public postService: PostService) {                                      //+ 7.3) Add the 'public' keyword, this will automatically create a new property in this component and store the incoming value in that property
                                                                                              //+      We need to inject 'Injectable({providedIn: 'root'})' into 'post.services.ts'
          }
          
                                                                                              //+ 7.4) Remove the Output decorator and emiter
          onAddPost(form: NgForm) {
              if (form.invalid) return;
              this.postService.addPost(form.value.title, form.value.content);                 //+ 7.5) Refactor to push data to our store, we are not using emit anymore
              form.resetForm();                                                               //+ 7.6) Just to reset the form after submiting
          }
      }
  ```

<h3 id='updateappcomponent'>Update App Component</h3>

[Go Back to Summary](#summary)

* Update app component to reflect all the changes that we did
  
* in `app.component.html`
  * Remove all the bindings that we did, we are using the store to do that
  
  ```HTML
      <app-header></app-header>
      <main>
          <app-post-create"></app-post-create">
          <app-post-list></app-post-list>
      </main>
  ```

* in `app.component.ts`

  ```TypeScript
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      
    }
  ```

<h1 id='rxjs'>rxjs</h1>

[Go Back to Summary](#summary)

* Rxjs an **observable**, it essentially about object that help us pass data around
* Rxjs is an dependency of angular

* in `posts.service.ts`:

  * Import a `Subject` form `rxjs`;
  * A `Subject` is more or less an event emiter
  * Create a new instance of Subject and pass a list of posts as a payload to it.
  * in `onAddPost()` add `this.postsUpdate.next([...this.posts])`, `.next()` will push/emit a new value to our store
  * create a new function `getPostUpdateListener()` and return an **observable object**
    * `.observable()` returns an object that we can listen to it but we can emit

  ```TypeScript
      import { Post } from './post.model';
      import { Injectable } from '@angular/core';
      import { Subject } from 'rxjs';                             //! 3) Import Subject - it's more or less an event emiter

      @Injectable({providedIn: 'root'})
      export class PostService {
          private posts: Post[] = [];
          private postsUpdate = new Subject<Post[]>();                //+ 3.1) Create a new instace of Subject, and pass a list of post as a payload

          getPosts() {
              return [...this.posts];
          }

          addPost(title: string, content: string) {
              const post: Post = {title: title, content:content};
              this.posts.push(post);                                  //+ 3.1) Update the post first
              this.postsUpdate.next([...this.posts]);                 //+ 3.2) then pushes/emit a new value to our store
          }

          getPostUpdateListener() {                                   //+ 3.3) New method to getUpdateListener
              return this.postsUpdate.asObservable();                     //- 3.3.1) .asObservable(), this returns an object where we can listen but we cant emit
                                                                          //- 3.3.2) we still can emit inside this file but we cant emit from where we are receiving this reference
          }
      }
  ```

* in `post-list.component.ts`
  * Add `OnInit` - componentDidMount
  * Add `OnDestroy` - componentWillUnmount

  ```JavaScript
      import { Component, OnInit, OnDestroy} from "@angular/core";//! 5) Remove Input and Import OnInit life cycle - componentDidMount
                                                                  //! 8) Add another life cycle OnDestroy - componentWillUnmount
      import { Post } from '../post.model';
      import { PostService } from '../posts.service';
      import { Subscription } from 'rxjs';                        //! 7) Import Subscription

      @Component({
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
      })
      export class PostListComponent implements OnInit, OnDestroy {   //+ 5.1) To use the componentDidMount life cycle
                                                                      //+ 8.1) To use the componentWillUnmount life cycle
          constructor(public postsService: PostService) {
          }
          posts: Post[] = [];                                         //+ 5.2) Remove @Input decorator we dont need anymore
          private postsSub: Subscription;                             //+ 7.1) Create a new instance of subscription and is undefined in the beginning
          ngOnInit() {                                                //+ 5.3) componentDidMount - Then we need to add this special method. Angular will automatically execute this command, when it creates this component
              this.posts = this.postsService.getPosts();                  //- 5.3.1) We fetch our posts
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
  ```

<h1 id='observable'>Observables, Observers and Subscriptions</h1>

<h2 id='whatobservable'>What is an Observable?</h2>

[Go Back to Summary](#summary)

* It's all about emitting and data and listening to that data in different places of our application.
* So we tipically think in `observables` and `observers`
  * the `observer` is essentially th thing subscribing to an observable


* There are three methods that are called on the observers side
  * `next`
  * `error`
  * `complete`

<h1 id='getposts'>Get Posts</h1>

<h2 id='backendget'>Node.js - Get Posts Request</h2>

[Go Back to Summary](#summary)

* first create the followins structure
  
  ```Bash
    .
    ├── server.js
    └── backend
        └── app.js
  ```

* in `server.js`

  ```JavaScript
    //! 1) Require HTTP, it's a default node.js package
    const http = require('http');
    //! 2) Import the express app
    const app = require('./backend/app');
    //! 3) Debug
    const debug = require('debug')('node-angular');

    //+ 1.1) Shorthand for port number
    const port = process.env.PORT || 3001;

    //+ 2.1) Set a configuration to set our express port
    app.set('port', port);

    //+ 1.2) Create a new server
    //+      Takes an eventListener, It's a function that will be executed for every incoming request no matter which path
    const server = http.createServer(app); //+ 2.2) Pass app, to use the app for the incoming request

    //* not necessary
    const onError = (error) => {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    };

    //* not necessary
    const onListening = () => {
        const addr = server.address();
        const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
        debug('Listening on ' + bind);
    };

    //* not necessary
    server.on('error', onError);
    server.on('listening', onListening);

    //+ 1.3) Listen to the port
    server.listen(port, () => {
        console.log(`Express app running on port ${port}`);
    });
  ```

* in `backend/app.js`

  ```Bash
    //! Require Express
    const express = require('express');

    //+ 1.1) Create an express app to use express features
    const app = express();

    //+ 1.2) Middlewares
    app.use('/api/posts', (req, res, next) => {
        const posts = [
            {
                id: '12312412313123',
                title: 'First server-side post',
                content: 'This is coming from the server!'
            },
            {
                id: 'fas2312123132',
                title: 'Second server-side post',
                content: 'This is coming from the server too!'
            }
        ];
        res.json({
            message: 'Posts fetched successfully!',
            posts
        });
    });

    //+ 1.3) Export to the server
    module.exports = app;
  ```

<h3 id='cors'>Cross-Origin Resource Sharing</h3>

[Go Back to Summary](#summary)

* To avoid **CORS** (Cross-Orgin Resouce Sharing) we need to create another middleware before reaching to to our routes API.
* in `app.js`

  ```JavaScript
      //! 2) Set a Header so we can access our api no matter what is the origin (to avoid CORS)
      app.use((req, res, next) => {
          //+ 2.1) response a Header (header key, header value);
          //+      '*', no matter the domain the app is sending the request, it's allowed to access the resources
          res.setHeader('Access-Control-Allow-Origin', '*');
          //+ 2.2) The types of headers allowed
          res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
          //+ 2.3) The methods of headers allowed
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
          next();
      });
  ```

<h3 id='resctructure1'>http.get() - Re-structure the Back-end</h3>

[Go Back to Summary](#summary)

* in `post-list.component.ts`:
  * Remove the this.posts variable, since we are not receiving anything from the getPosts() method, we are just triggering the mothod to fetch for posts

  ```TypeScript
    ngOnInit() {
        this.postsService.getPosts();                               // Just triggering to fech posts
        this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
            this.posts = posts
        });
    }
  ```

<h2 id='fetehingpost'>Angular - Fetching Posts</h2>

[Go Back to Summary](#summary)

* First let's add another property to our `post.model.ts`
* in `post.model.ts`:
  * Add the `id`, type `string`

  ```TypeScript
    export interface Post {
        id: string,
        title: string;
        content: string;
    }
  ```

<h3 id='unlockhttpangular'>Unlock Angular HTTP Client</h3>

[Go Back to Summary](#summary)

* Angular has a built-in http client. But first we need to unlock in the `app.module.ts`
  
* in `app.module.ts`
  * Import the `{ HttpClientModule }` from `@angular/common/http`
  * Then we need to add to the `imports` array, to really unlock this feature
    * Now we can use the http client in our components or services.

  ```TypeScript
    import { HttpClientModule } from '@angular/common/http';                         //! 10) Import HTTP Client module to make http request to the server

    @NgModule({
      declarations: [
        ...    
      ],
      imports: [
        ...
        HttpClientModule,         //+ 10.1) Unlock the HttpClientModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
  ```

<h3 id='updateangularhttp'>Update Angular Project to Fetch Posts</h3>

[Go Back to Summary](#summary)

* in `posts.service.ts`:
  * Import `{ HttpClient }` from `@angular/common/http`
  * Create a constructor to bind a property, type of HttpClient
  

  * Refactor the `getPost()` method
    * the HttpClient has a `.get()` method to fetch data
    * the `.get()` by itself won't send request if we don't listen to it (`.subscribe()`)
      * And subscribe(), we can pass 3 arguments, 1st is the `new data`, `error` and `compete`
        * For now, we are just going to use to get new data, lets add a function to be executed whenever we get a response.

  ```TypeScript
      import { Post } from './post.model';
      import { Injectable } from '@angular/core';
      import { Subject } from 'rxjs';
      import { HttpClient } from '@angular/common/http';          //! 6) Impor Http Client

      @Injectable({providedIn: 'root'})

      export class PostService {
          private posts: Post[] = [];
          private postsUpdate = new Subject<Post[]>();

          constructor(private http: HttpClient) {                     //+ 6.1) Inject and automatically bind to a property using private with a type of HttpClient

          }

          getPosts() {
              this.http.get<{message: string, posts: Post[]}>('http://localhost:3001/api/posts') //+ 6.1) Http GET Request
                  .subscribe((data)=> {                                       //- 6.1.1) The angular http client uses observables, for that we need to listen to the request using .subscribe()
                      this.posts = data.posts;                                //-        We dont't need to store the subscription and unsubscribe from it (ngOnDestroy) beacause observables
                      this.postsUpdate.next([...this.posts]);                 //-        connected to features built into angular like the http cliente, the unsubscription will be automatically
                                                                              //-        be handle for us by angular
                  });
          }

          addPost(title: string, content: string) {
              const post: Post = { id:null, title: title, content:content};   //- Add the id: null, to avoid errors
              this.posts.push(post);
              this.postsUpdate.next([...this.posts]);
          }

          getPostUpdateListener() {
              return this.postsUpdate.asObservable();
          }
      }
  ```

* in `post-list.component.ts`
  * Just remove `this.posts` on the `ngOnInit()` method, because we are using `this.postService.getPosts()` to trigger the fetch request. We are not receiving any data back.
    
  ```TypeScript
      ngOnInit() {
          this.postsService.getPosts();                               // We not receiving any data back
          this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
              this.posts = posts
          });
      }
  ```

<h1 id='postpost'>Post Post</h1>

<h2 id='backendpost'>Node.js - Post Post Request</h2>

<h3 id='postrequest'>Post Request - body-parser</h3>

[Go Back to Summary](#summary)

* Post requests have a request body attached to them and we need to extract that data.
* For that we can install another node/express package that adds a middleware. Express will automatically extract the incoming request data and add it as a new field to that request object.
* Install `npm i body-parser`

* in `app.js`
  * Require the `body-parser` package

```TypeScript
    const express = require('express');
    //! 3) Rquire body-parse to extrat the incoming body from the request
    const bodyParser = require('body-parser');

    const app = express();

    //+ 3.1) This will return a valid express middleware for parsing json data
    app.use(bodyParser.json());
    //+ 3.1) This will parse the url encode data
    //-    3.1) Extended: false to onlly support default features
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
        next();
    });

    //+ 3.2) Post Request - Middleware
    app.post('/api/posts', (req, res, next) => {
        console.log(req.body);
        res.json(req.body);
    });

    app.get('/api/posts', (req, res, next) => {
        const posts = [
            {
                id: '12312412313123',
                title: 'First server-side post',
                content: 'This is coming from the server!'
            },
            {
                id: 'fas2312123132',
                title: 'Second server-side post',
                content: 'This is coming from the server too!'
            }
        ];
        res.json({
            message: 'Posts fetched successfully!',
            posts
        });
    });
    module.exports = app;
```

<h2 id='angularpost'>Angular - Send a Post Request</h2>

[Go Back to Summary](#summary)

* in `posts.service.ts`
  * Let's refactor our `addPost()` method to send a post request to the server
  * we can refactor the structure of the post that we are going to receive from the server (add postID)
    * So before updating the post store, we receive the id from the server and then we change the `id:null` to `id: ObjectId`

  ```TypeScript
      addPost(title: string, content: string) {
          const post: Post = { id: null, title: title, content:content};
          this.http.post<{message: string, postId: string}>('http://localhost:3001/api/posts', post)
          .subscribe((data) => {
                  post.id = data.postId;
                  this.posts.push(post);
                  this.postsUpdate.next([...this.posts]);
              })
      }
  ```

<h1 id='mongodb'>MongoDB</h1>

[Go Back to Summary](#summary)

<h2 id='connectwithmongodb'>Node.js - Connect With MongoDB</h2>

[Go Back to Summary](#summary)

* Install `mongoose` package to use Schemas (MongoDB doesn't use Schema)
* This will help use to interact with mongoDB database to CRUD
  * `npm i mongoose`
* And install dotenv, to mask our database connection
  * `npm i dotenv`
  * create a `.env` file in the main root of our app
    * Add `DATABASE_URL=mongodb+srv://...`
  
<h3 id='schema'>Create a Schema</h3>

[Go Back to Summary](#summary)

* Create a `models` folder to centralize all the Schemas
  
  ```Bash
    .
    └── backend
        └── models
            └── post.js
  ```

* in `post.js`

```JavaScript
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const PostSchema = new Schema(
      {
          title: {
              type: String,
              required: true
          },
          content: {
              type: String,
              required: true
          }
      },
      {
          timestamps: true
      }
  );

  module.exports = mongoose.model('Post', PostSchema);
```

* in `app.js`
  * Require the `Post` Schema
  * Refactor our `addPost()` and `getPosts()` methods to fetch and create a post from our database

  ```JavaScript
      const express = require('express');
      const bodyParser = require('body-parser');
      //! 4) Require mongoose
      const mongoose = require('mongoose');
      //! 5) Require the Post Schema
      const Post = require('./models/post');
      //! 6) Require dotenv package
      require('dotenv').config();

      const app = express();

      //+ 4.1) Connect our mongoose to mongoDB
      mongoose
          .connect(process.env.DATABASE_URL, {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true
          })
          .then(() => {
              console.log('Connected to database');
          })
          .catch(() => {
              console.log('Connection failed!');
          });

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));

      app.use((req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
          next();
      });

      app.post('/api/posts', (req, res, next) => {
          const post = new Post({
              title: req.body.title,
              content: req.body.content
          });
          post.save().then((data) => {
              res.json({
                  postId: data._id,
                  message: 'Post added successfully'
              });
          });
      });

      app.get('/api/posts', async (req, res, next) => {
          const posts = await Post.find().select('-createdAt -updatedAt -__v');
          res.json({
              message: 'Posts fetched successfully!',
              posts
          });
      });

      module.exports = app;
  ```

<h3 id='angulargettingdata'>Angular - GET/POST Data MongoDB</h3>

[Go Back to Summary](#summary)

* We can chain another method pipe() - we can manipulate the data before the subscription. pipe accepts multiple operators
  * This way we can convert `_id` that we are receiving from the server before subscribing

  ```TypeScript
      import { map } from 'rxjs/operators';                       //! 7) Import the map operator so we can use with pipe()
    
    ...

      getPosts() {
          this.http.get<{message: string, posts: any}>('http://localhost:3001/api/posts')
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
          .subscribe((transformedData)=> {                        // now we are not getting data.post anymore, just the transformed data
                  this.posts = transformedData;
                  this.postsUpdate.next([...this.posts]);
              });
      }
      
      ...
  ```

<h1 id='deletepost'>Delete Post</h1>


<h2 id='nodedelete'>Node.js - Delete Request</h2>

[Go Back to Summary](#summary)

* in `app.js`
  * Create another route to delete a specific `id`

  ```JavaScript
      //+ 3.3) Delete Request - Middleware
      app.delete('/api/posts/:id', async (req, res, next) => {
          await Post.findOneAndDelete({ _id: req.params.id });
          res.json({ message: 'Post deleted!' });
      });
  ```

<h2 id='angulardelete'>Angular - Delete Request</h2>

[Go Back to Summary](#summary)

* We need to wire up the delete button
* in `post-list.component.html`
  * We need to create an event listener to listen to a click an passa a `onDelete(post.id)` that we are going to create next

  ```HTML
      <mat-accordion multi="true" *ngIf="posts.length > 0">
          <mat-expansion-panel *ngFor="let post of posts">
              <mat-expansion-panel-header>
                  {{ post.title }}
              </mat-expansion-panel-header>
              <p>{{ post.content }}</p>
              <mat-action-row>
                  <button mat-button color="primary">EDIT</button>
                  <button mat-button color="warn" (click)="onDelete(post.id)">DELETE</button>
              </mat-action-row>
          </mat-expansion-panel>
      </mat-accordion>
      <p class="info-text mat-body-1" *ngIf="posts.length === 0">No Posts Added Yet!</p>
  ```

* in `post-list.component.ts`
  * Let's create the `onDelete()` method so we can use on our html

  ```TypeScript
      onDelete(postId: string) {                              //! 9) Delete post method
          this.postsService.deletePost(postId);                   //+ 9.1) Call our postService tos send the postId
      }
  ```

* in `post.service.ts`
  * Let's create the request to send to our backend

  ```TypeScript
      deletePost(postId: string) {
          this.http.delete(`http://localhost:3001/api/posts/${postId}`)
          .subscribe(() => {
              const updatePosts = this.posts.filter((post) => post.id !== postId);
              this.posts = updatePosts;
              this.postsUpdate.next([...this.posts])
          })
      }
  ```
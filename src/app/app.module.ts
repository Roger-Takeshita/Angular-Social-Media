import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';                                    //! 2) Import Forms
import { MatInputModule } from '@angular/material/input';                        //! 3) Import Input from Material (using Material v9 or above)
import { MatCardModule } from '@angular/material/card';                          //! 4) Import Card Module fom Material
import { MatButtonModule } from '@angular/material/button';                      //! 5) Import Button Module from Material
import { MatToolbarModule } from '@angular/material/toolbar';                    //! 6) Import Toolbar Module from Material
import { MatExpansionModule } from '@angular/material/expansion';                //! 9) Import Expansion Moduel from Material

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component'; //! 1) We need to import the component (the class that we exported)
import { HeaderComponent } from './header/header.component';                     //! 7) Import the header component
import { PostListComponent } from './post-list/post-list.component';             //! 8) Import the post-list component

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,      //+ 1.1) Then we need to declare the component (that all we need do to use a component)
    HeaderComponent,          //+ 7.1) Declare the header component
    PostListComponent         //+ 8.1) Declare the post-list component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,  //+ 2.1) Import the FormsModule, now we are unlocking some form features, and ngModel is one of them
    MatInputModule,           //+ 3.1) Import the MatInputModule
    MatCardModule,            //+ 4.1) Import the MatCardModule
    MatButtonModule,          //+ 5.1) Import the MatButtonModule
    MatToolbarModule,         //+ 6.1) Import the MatToolbarModule
    MatExpansionModule        //+ 9.1) Import the MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

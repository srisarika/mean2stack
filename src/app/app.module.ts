import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AngularComponent } from './angular/angular.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PostComponent } from './post/post.component';
import { ShareComponent } from './share/share.component';
import { routing } from "./app.routing";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    AngularComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    JumbotronComponent,
    MongodbComponent,
    NodejsComponent,
    PostComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

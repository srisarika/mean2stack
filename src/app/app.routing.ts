import { RouterModule, Routes } from "@angular/router";
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
const APP_ROUTES: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'nodejs', component: NodejsComponent },
  { path: 'mongodb', component: MongodbComponent },
  { path: 'post/', component: PostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', component: AboutmeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

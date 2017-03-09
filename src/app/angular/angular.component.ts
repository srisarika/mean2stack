import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from '@angular/http';
import {Httpprovider} from '../services/httpprovider';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers:[Http, HTTP_PROVIDERS, Httpprovider],
  directives:[ ROUTER_DIRECTIVES]
})
export class AngularComponent implements OnInit {
  public posts: any[] = [];
  public page = 0;
  constructor(private router: Router,private _httpprovider: Httpprovider) { }
  onNavigate(path) {
    this.router.navigate(['post',path]);
  }
  ngOnInit() {
    let vari = this;
    this._httpprovider.httpReq('/getAllposts', 'POST', {postTopic:"angular2"}, null).subscribe((data)=> {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        vari.posts.push(data[i]);
      }

    });
  }

}

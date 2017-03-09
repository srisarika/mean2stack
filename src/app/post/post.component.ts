import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from "@angular/router";
import {Httpprovider} from '../services/httpprovider';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from '@angular/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[Http, HTTP_PROVIDERS, Httpprovider]
})
export class PostComponent implements OnInit {

  id: string;
  public post = {};
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private _httpprovider: Httpprovider) {
    activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
    this._httpprovider.httpReq('/getPost', 'POST', {postPath:this.id}, null).subscribe((data)=> {
      this.post = data;

    });
  }

  ngOnInit() {
  }

}

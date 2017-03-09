import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, FooterComponent, HeaderComponent, JumbotronComponent]
})
export class AppComponent {

}

import "reflect-metadata";
import "zone.js";
import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { bootstrap }    from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-app',
  template: '<h1>for test</h1>'
})
class AppComponent { }

bootstrap(AppComponent);
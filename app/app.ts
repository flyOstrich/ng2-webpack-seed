import "reflect-metadata";
import { Component } from '@angular/core';
import {provideRouter, RouterConfig,ROUTER_DIRECTIVES} from '@angular/router';
import { bootstrap }    from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-app',
  directives:[ROUTER_DIRECTIVES],
  template: '<h1>for test</h1><router-outlet></router-outlet>'
})
class AppComponent { }

@Component({
    
})
class ComponentA{

}

@Component({

})
class ComponentB{
  
}

let routerConfig:RouterConfig=[
   {path:"/componentA",component:ComponentA},
   {path:"/componentB",component:ComponentB}
];

bootstrap(AppComponent,[provideRouter(routerConfig)]);
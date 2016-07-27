import "reflect-metadata";
import { Component } from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES, Router} from '@angular/router';
import { bootstrap }    from '@angular/platform-browser-dynamic';

let heros = [
  { name: "abc" },
  { name: "def" },
  { name: "ghi" },

]

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>for test</h1>
    <p>
       {{hero1}}<br>
       {{hero2}}
       <input [(ngModel)]="hero3"/>
    </p>
    <p *ngIf="hero1==1">{{hero1}}</p>
    
    <router-outlet  ></router-outlet>
    <button (click)="handleClick()">clcik me</button>
      <ul class="heros">
          <li *ngFor="let hero of heros">
               {{hero.name}}{{hero1}}
           </li>
     </ul>
  `
})
class AppComponent {
  heros = heros
  hero1: String = "shadan"
  hero2: String = "shadan2"
  constructor(private router: Router) {

  }
  handleClick() {
    alert('aaa')
    console.log(this.router)
    this.router.navigateByUrl("componentB")
  }
}

@Component({
  template: `
      <h1>test2</h1>
   `
})
class ComponentA {

}

@Component({
  template: `aaaaaaaaaaaaaaaaaaaaaaa`
})
class ComponentB {

}

let routerConfig: RouterConfig = [
  { path: "", redirectTo: "componentA", pathMatch: 'full' },
  { path: "componentA", component: ComponentA },
  { path: "componentB", component: ComponentB }
];

bootstrap(AppComponent, [provideRouter(routerConfig)]);
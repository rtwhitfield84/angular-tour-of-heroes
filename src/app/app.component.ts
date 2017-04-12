import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `
})
export class AppComponent  {

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

 }

 export class Hero {

   id: number;
   name: string;
 }

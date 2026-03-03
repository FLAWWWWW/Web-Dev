import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Album App</p>
      <a routerLink="/albums">Browse Albums</a>
    </div>
  `
})
export class HomeComponent {}
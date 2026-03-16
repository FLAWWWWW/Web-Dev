import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div>
      <h1>About</h1>
      <p>Name: Anastasia</p>
      <p>Course: Web Development</p>
    </div>
  `
})
export class AboutComponent {}
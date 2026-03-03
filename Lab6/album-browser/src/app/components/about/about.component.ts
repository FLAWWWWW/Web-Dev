import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div>
      <h1>About</h1>
      <p>Name: [Your Name]</p>
      <p>Course: Angular Development</p>
    </div>
  `
})
export class AboutComponent {}
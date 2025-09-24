import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  constructor() {
    document.title = 'About';
  }
}

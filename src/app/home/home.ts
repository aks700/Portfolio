import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    constructor()
  {
    document.title="Home"
  }

 downloadCV() {
  const link = document.createElement('a');
  link.href = 'CV_AKSHAT.pdf';
  link.download = 'CV_AKSHAT.pdf';
  link.click();
  }
  
}

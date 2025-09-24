import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panel',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel {
   openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number) {
    return this.openIndex === index;
  }
}

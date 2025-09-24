import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Panel } from '../panel/panel';

@Component({
  selector: 'app-skill',
  imports: [RouterLink,RouterOutlet,Panel],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill {
  constructor() {
    document.title = 'Education';
  }
}

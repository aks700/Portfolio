
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class CardComponent {
  @Input() card!: {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
  };

  isModalOpen = false;
  currentImageIndex = 0;

  openCardModal() {
    this.isModalOpen = true;
    this.currentImageIndex = 0;
  }

  closeCardModal() {
    this.isModalOpen = false;
  }

  nextImage() {
    if (this.card.pictures?.length) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.card.pictures.length;
    }
  }

  prevImage() {
    if (this.card.pictures?.length) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.card.pictures.length) % this.card.pictures.length;
    }
  }
}

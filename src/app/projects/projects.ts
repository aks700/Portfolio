import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card';


@Component({
  selector: 'app-projects',
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule,CardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
    projects = [
  {
    id: 1,
    name: 'Beverage Bot',
    summary: 'A rule-based and AI-enhanced chatbot built for a beverage store, combining predefined logic with a neural network to deliver real-time, personalized customer support across multiple platforms.',
    description: 'This project delivers a hybrid chatbot for a beverage store, combining a rule-based system with a neural network to handle customer inquiries. The rule engine maps user inputs to predefined tags, while the neural network predicts tags and generates real-time responses. Deployed across websites, social media, and mobile apps, the chatbot operates 24/7 to enhance customer engagement and reduce support workload. Performance is evaluated using accuracy and response time metrics, aiming to improve service efficiency and brand loyalty.',
    projectLink: 'https://github.com/aks700/ChatBot',
    pictures: ['bot.png'],
  },
  {
    id: 2,
    name: 'VideoTube',
    summary: 'A complete backend for a video hosting platform, built with Node.js, Express, and MongoDB, featuring authentication, video management, and user interactions using modern best practices.',
    description: 'This project is a robust backend for a YouTube-like video platform built with Node.js, Express.js, MongoDB, and Mongoose. It includes user authentication, video uploads, likes/dislikes, comments with replies, and subscription management. Following modern practices, it uses JWT for authentication, bcrypt for password hashing, and features a modular, scalable, and secure architecture ready for frontend integration.',
    projectLink: 'https://github.com/aks700/VideoTube',
    pictures: ['video.png'],
  }
];

  constructor()
  {
    document.title='Projects'
  }
}

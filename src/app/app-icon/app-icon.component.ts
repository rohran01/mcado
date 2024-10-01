import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-icon.component.html',
  styleUrl: './app-icon.component.scss'
})
export class AppIconComponent {
  constructor(private router: Router) { }

  @Input() operational: boolean = false;
  @Input() backgroundImageUrl: String = '';
  @Input() backgroundColor: String = ''

  onClick() {
    if (this.operational) {
      this.boop();
      this.router.navigate(['rapture']);
    }

  }

  boop() {
    let audio = new Audio();
    audio.src = "../assets/sounds/boop.mp3";
    audio.load();
    audio.play();
  }
}

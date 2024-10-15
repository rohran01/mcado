import { Component, Input } from '@angular/core';
import { Show } from '../types/Show';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rapture-show-card',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './rapture-show-card.component.html',
  styleUrl: './rapture-show-card.component.scss'
})
export class RaptureShowCardComponent {
  constructor(private router: Router) { }

  @Input() showDetails!: Show;

  onClick() {
    if (this.showDetails.playable) {
      this.boop();
      this.router.navigate(['mikado-selection'])
    }
  }

  boop() {
    let audio = new Audio();
    audio.src = "../assets/sounds/boop.mp3";
    audio.load();
    audio.play();
  }
}

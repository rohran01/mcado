import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Show } from '../types/Show';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mikado-option',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './mikado-option.component.html',
  styleUrl: './mikado-option.component.scss'
})
export class MikadoOptionComponent {
  constructor(private router: Router) { }

  @Input() showDetails!: Show;

  onClick() {
    if (this.showDetails.playable) {
      this.router.navigate(['mikado-config'])
    }
  }
}

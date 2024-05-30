import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './app-icon.component.html',
  styleUrl: './app-icon.component.scss'
})
export class AppIconComponent {
  constructor(private router: Router) { }

  @Input() operational: boolean = false;
  @Input() backgroundImageUrl: String = '';

  navigateToGSFlix() {
    if (this.operational) this.router.navigate(['gs-app']);
  }

}

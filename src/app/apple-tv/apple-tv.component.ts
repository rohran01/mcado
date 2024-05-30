import { Component } from '@angular/core';
import { AppIconComponent } from '../app-icon/app-icon.component';

@Component({
  selector: 'app-apple-tv',
  standalone: true,
  imports: [AppIconComponent],
  templateUrl: './apple-tv.component.html',
  styleUrl: './apple-tv.component.scss'
})
export class AppleTvComponent {
  constructor () {}
}

import { Component, Input } from '@angular/core';
import { Show } from '../types/Show';

@Component({
  selector: 'app-rapture-show-card',
  standalone: true,
  imports: [],
  templateUrl: './rapture-show-card.component.html',
  styleUrl: './rapture-show-card.component.scss'
})
export class RaptureShowCardComponent {
  @Input() showDetails!: Show;
}

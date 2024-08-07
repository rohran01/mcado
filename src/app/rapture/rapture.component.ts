import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Show } from '../types/Show';
import { RaptureShowCardComponent } from '../rapture-show-card/rapture-show-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rapture',
  standalone: true,
  imports: [MatIconModule, RaptureShowCardComponent, CommonModule],
  templateUrl: './rapture.component.html',
  styleUrl: './rapture.component.scss'
})
export class RaptureComponent {
  placeholder = 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.'


  shows: Show[] = [
    {
      title: 'The Gondoliers',
      description: this.placeholder,
      image: '../assets/show-images/gondoliers.png'
    },
    {
      title: 'The Grand Duke',
      description: this.placeholder,
      image: '../assets/show-images/grandduke.png'
    },
    {
      title: 'Princess Ida',
      description: this.placeholder,
      image: '../assets/show-images/ida.png'
    },
    {
      title: 'Iolanthe',
      description: this.placeholder,
      image: '../assets/show-images/iolanthe.png'
    },
    {
      title: 'Patience',
      description: this.placeholder,
      image: '../assets/show-images/patience.png'
    },
    {
      title: 'HMS Pinafore',
      description: this.placeholder,
      image: '../assets/show-images/pinafore.png'
    },
    {
      title: 'The Pirates of Penzance',
      description: this.placeholder,
      image: '../assets/show-images/pirates.png'
    },
    {
      title: 'Ruddigore',
      description: this.placeholder,
      image: '../assets/show-images/ruddigore.png'
    },
    {
      title: 'The Sorcerer',
      description: this.placeholder,
      image: '../assets/show-images/sorcerer.png'
    },
    {
      title: 'Utopia, Limited',
      description: this.placeholder,
      image: '../assets/show-images/utopia.png'
    },
    {
      title: 'Yeomen of the Guard',
      description: this.placeholder,
      image: '../assets/show-images/yeomen.png'
    }
  ];
}

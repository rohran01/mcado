import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Show } from '../types/Show';
import { MikadoOptionComponent } from "../mikado-option/mikado-option.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mikado-selection',
  standalone: true,
  imports: [MatIcon, MikadoOptionComponent, CommonModule],
  templateUrl: './mikado-selection.component.html',
  styleUrl: './mikado-selection.component.scss'
})
export class MikadoSelectionComponent {

  shows: Show[] = [
    {
      title: 'The Mikado (original)',
      description: "Trigger warnings: Racism, exoticism, cultural appropriation. Available in Texas, Florida, Kansas",
      image: '../assets/mikado-versions/original.jpg',
      playable: false
    },
    {
      title: 'Hot Mikado',
      description: "The Hot Mikado (1985) is a reincarnation of the 1939 all African-American reimagining of Gilbert and Sullivan’s classic.",
      image: '../assets/mikado-versions/hot.png',
      playable: false
    },
    {
      title: 'The Cool Mikado',
      description: "The Cool Mikado is reset as a contemporary 1960s comic gangster story.",
      image: '../assets/mikado-versions/cool.jpg',
      playable: false
    },
    {
      title: 'Il Ducato',
      description: "Il Ducato! The San Francisco Lamplighters re-setting of the G&S classic in Renaissance Italy. ",
      image: '../assets/mikado-versions/ducato.jpg',
      playable: false
    },
    {
      title: 'Eric Idol Mikado',
      description: "Eric Idle of Monty Python fame, leads a 1987 ensemble of “The Mikado” set in an English country hotel during the 1920s.",
      image: '../assets/mikado-versions/idle.png',
      playable: false
    },
    {
      title: 'The McAdo',
      description: "The world-acclaimed Gilbert & Sullivan Very Light Opera Company breathes new life into an old classic by seamlessly resetting The Mikado in Scotland!",
      image: '../assets/mikado-versions/mcado.png',
      playable: true
    }
  ];

}

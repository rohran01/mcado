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
      description: "The Gondoliers; or, The King of Barataria* is a two-act operetta by Gilbert and Sullivan that premiered at London's Savoy Theatre on December 7, 1889. The opera is about two foster brothers, Marco and Giuseppe, who are gondoliers and discover …",
      image: '../assets/show-images/gondoliers.jpg',
      playable: false
    },
    {
      title: 'The Grand Duke',
      description: "The fourteenth and final of Gilbert and Sullivan’s Savoy Operas, The Grand Duke premiered on 7 March 1896, and ran for 123 performances. The plot involves a troupe of actors taking political power.",
      image: '../assets/show-images/grandduke.jpg',
      playable: false
    },
    {
      title: 'Princess Ida',
      description: "A comic opera that satirizes feminism, women’s education and Darwinian evolution which were controversial topics in Victorian England, Princess Ida was the eighth operatic collaboration for Gilbert & Sullivan. Princess Ida opened at the Savoy Theatre …",
      image: '../assets/show-images/ida.jpg',
      playable: false
    },
    {
      title: 'Iolanthe',
      description: "Gilbert and Sullivan’s Iolanthe was first performed in 1882 at the Savoy Opera. In the opera, the fairy Iolanthe has been banished from fairyland because she married a mortal; this is forbidden by fairy law. ",
      image: '../assets/show-images/iolanthe.jpeg',
      playable: false
    },
    {
      title: 'Patience',
      description: "Patience; or, Bunthorne's Bride, is a two-act comic operetta by W. S. Gilbert and Arthur Sullivan that satirizes the aesthetic movement of the 1870s and 1880s in England. The opera also mocks fads, vaniy…",
      image: '../assets/show-images/patience.png',
      playable: false
    },
    {
      title: 'HMS Pinafore',
      description: "H.M.S. Pinafore was first performed at the Opera Comique in London on 25 May 1878. It marked the fourth operatic collaboration for Gilbert & Sullivan and their first international sensation. The story takes place aboard the Royal Navy ship HMS Pinafore.  ",
      image: '../assets/show-images/pinafore.png',
      playable: false
    },
    {
      title: 'The Pirates of Penzance',
      description: "The Pirates of Penzance; or, The Slave of Duty is a comic opera in two acts, with music by Arthur Sullivan and libretto by W. S. Gilbert. Its official premiere was at the Fifth Avenue Theatre in New York City on 31 December 1879, where it was well received…",
      image: '../assets/show-images/pirates.png',
      playable: false
    },
    {
      title: 'Ruddigore',
      description: "Originally called Ruddygore, the operetta was first performed at the Savoy Opera on January 22, 1887. The opera includes (and parodies) elements of melodrama. There is a priggishly good-mannered poor-but-virtuous heroine, a villain who carries off the maiden….",
      image: '../assets/show-images/ruddigore.jpg',
      playable: false
    },
    {
      title: 'The Sorcerer',
      description: "The Sorcerer was the British duo's third operatic collaboration. The plot of The Sorcerer is based on An Elixir of Love, a story that Gilbert wrote for The Graphic magazine in 1876. A young man, Alexis, is obsessed…",
      image: '../assets/show-images/sorcerer.jpg',
      playable: false
    },
    {
      title: 'Utopia, Limited',
      description: "The second-to-last of G&S’s fourteen collaborations, Utopia, Ltd. satirizes limited liability companies and in particular the idea that a company could leave creditors unpaid without any liability on the part of its owners. An idea teeming with musical possibilities. Not.",
      image: '../assets/show-images/utopia.jpg',
      playable: false
    },
    {
      title: 'Yeomen of the Guard',
      description: "The Yeomen of the Guard is an operetta by Gilbert & Sullivan that takes place in the Tower of London in the 16th century. The show is about a traveling troupe of performers who arrive …",
      image: '../assets/show-images/yeomen.png',
      playable: false
    },
    {
      title: 'The Mikado',
      description: "The Mikado is Gilbert & Sullivan’s most successful operetta.  The work– a satire of British institutions, society and politics – has been translated into numerous languages and is one of the most frequently played musical theater pieces in history.  ",
      image: '../assets/show-images/mikado.jpg',
      playable: true
    }
  ];
}

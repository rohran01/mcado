import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-suggestions-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './suggestions-confirmation-dialog.component.html',
  styleUrl: './suggestions-confirmation-dialog.component.scss'
})
export class SuggestionsConfirmationDialogComponent {

}

import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rapture-suggestions',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './rapture-suggestions.component.html',
  styleUrl: './rapture-suggestions.component.scss'
})
export class RaptureSuggestionsComponent {
  readonly dialog = inject(MatDialog);

  confirm() {
    const dialogRef = this.dialog.open(SuggestionsConfirmationDialog, {
      disableClose: true,
      autoFocus: true,
      panelClass: 'rapture-dialog'
    });
  }
}

@Component({
  selector: 'suggestions-confirmation-dialog',
  templateUrl: '../suggestions-confirmation-dialog/suggestions-confirmation-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class SuggestionsConfirmationDialog {
  readonly dialogRef = inject(MatDialogRef<SuggestionsConfirmationDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

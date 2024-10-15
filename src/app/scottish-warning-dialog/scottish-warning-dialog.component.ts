import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-scottish-warning-dialog',
  standalone: true,
  imports: [MatDialogModule, MatCheckboxModule],
  templateUrl: './scottish-warning-dialog.component.html',
  styleUrl: './scottish-warning-dialog.component.scss'
})
export class ScottishWarningDialogComponent {

}

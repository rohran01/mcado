import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButton } from '@angular/material/button';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';


@Component({
  selector: 'app-mikado-config',
  standalone: true,
  imports: [MatIcon, MatStepperModule, MatButton, MatRadioModule, MatCheckboxModule, MatSliderModule, CommonModule, MatRippleModule],
  templateUrl: './mikado-config.component.html',
  styleUrl: './mikado-config.component.scss'
})
export class MikadoConfigComponent implements AfterViewInit {
  readonly dialog = inject(MatDialog);
  anachronismLabel: string = 'None';
  showPlay: boolean = true;

  @ViewChild(MatRadioGroup) accentsGroup: MatRadioGroup | undefined;
  @ViewChild(MatStepper) stepper: MatStepper | undefined;
  ngAfterViewInit() {
    if (this.stepper) this.stepper._getIndicatorType = () => 'number';
  }

  onPlayClick() {
    this.showPlay = !this.showPlay;
  }

  scottishWarning() {
    if (this.accentsGroup?.value == 2) {
      const dialogRef = this.dialog.open(ScottishWarningDialog, {
        disableClose: true,
        autoFocus: true,
        panelClass: 'rapture-dialog'
      });

    }
  }

  updateAnachronismLabel(event: Event) {
    var value = (event.target as HTMLInputElement).value;

    switch (value) {
      case '0': {
        this.anachronismLabel = 'None (boring)'
        break;
      }
      case '1': {
        this.anachronismLabel = 'Mild (inoffensive, but dull)'
        break;
      }
      case '2': {
        this.anachronismLabel = 'Minnesota Spicy (so, still mild)'
        break;
      }
      case '3': {
        this.anachronismLabel = 'Delightfully Irreverent (currently trending)'
        break;
      }
      case '4': {
        this.anachronismLabel = 'Shameless & Absurd (same as “delightfully irreverent” but with whoopee cushions, cell phones, and spit takes)'
        break;
      }
      default: {
        break;
      }
    }
  }

  navNext(stepper: MatStepper) {
    stepper.next();
  }

  navBack(stepper: MatStepper) {
    stepper.previous();
  }
}

@Component({
  selector: 'scottish-warning-dialog',
  templateUrl: '../scottish-warning-dialog/scottish-warning-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class ScottishWarningDialog {
  readonly dialogRef = inject(MatDialogRef<ScottishWarningDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

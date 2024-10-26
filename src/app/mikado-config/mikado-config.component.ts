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
import { Router } from '@angular/router';


@Component({
  selector: 'app-mikado-config',
  standalone: true,
  imports: [MatIcon, MatStepperModule, MatButton, MatRadioModule, MatCheckboxModule, MatSliderModule, CommonModule, MatRippleModule],
  templateUrl: './mikado-config.component.html',
  styleUrl: './mikado-config.component.scss'
})
export class MikadoConfigComponent implements AfterViewInit {
  constructor(private router: Router) { }

  readonly dialog = inject(MatDialog);
  anachronismTitle: string = 'No Anachronisms';
  anachronismSubTitle: string = 'Safest choice. Dull.';
  showPlay: boolean = true;

  @ViewChild(MatRadioGroup) accentsGroup: MatRadioGroup | undefined;
  @ViewChild(MatStepper) stepper: MatStepper | undefined;
  ngAfterViewInit() {
    if (this.stepper) this.stepper._getIndicatorType = () => 'number';
  }

  onPlayClick() {
    this.boop();
    this.showPlay = !this.showPlay;
  }

  accentChange() {
    let selection = this.accentsGroup?.value;

    if (selection == 2) {
      this.midatlanticConfirmation();
    } else if (selection == 3) {
      this.scottishWarning();
    }
  }

  midatlanticConfirmation() {
    const dialogRef = this.dialog.open(MidatlanticDialog, {
      disableClose: true,
      autoFocus: true,
      panelClass: 'rapture-dialog'
    });
  }

  scottishWarning() {
    const dialogRef = this.dialog.open(ScottishWarningDialog, {
      disableClose: true,
      autoFocus: true,
      panelClass: 'rapture-dialog'
    });
  }

  intermission() {
    const dialogRef = this.dialog.open(IntermissionDialog, {
      disableClose: true,
      autoFocus: true,
      panelClass: 'rapture-dialog'
    });
  }

  navSuggestions() {
    this.router.navigate(['suggestions']);
  }

  updateAnachronismLabel(event: Event) {
    this.boop();
    let value = (event.target as HTMLInputElement).value;

    switch (value) {
      case '0': {
        this.anachronismTitle = 'No Anachronisms'
        this.anachronismSubTitle = 'Safest choice. Dull.'
        break;
      }
      case '1': {
        this.anachronismTitle = 'Mild'
        this.anachronismSubTitle = 'Inoffensive. Muted. Meh.'
        break;
      }
      case '2': {
        this.anachronismTitle = 'Minnesota Spicy'
        this.anachronismSubTitle = 'Not spicy.'
        break;
      }
      case '3': {
        this.anachronismTitle = 'Delightfully Irreverent'
        this.anachronismSubTitle = 'Carefully curated to maximize "ha ha" and minimize "no no"'
        break;
      }
      case '4': {
        this.anachronismTitle = 'Shameless & Absurd'
        this.anachronismSubTitle = 'Same as “delightfully irreverent” but with whoopee cushions, cell phones, and spit-takes'
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

  boop() {
    let audio = new Audio();
    audio.src = "../assets/sounds/boop.mp3";
    audio.load();
    audio.play();
  }
}

@Component({
  selector: 'midatlantic-dialog',
  templateUrl: '../midatlantic-dialog/midatlantic-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class MidatlanticDialog {
  readonly dialogRef = inject(MatDialogRef<MidatlanticDialog>);

  onNoClick(): void {
    this.dialogRef.close();
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
    MatCheckboxModule
  ],
})
export class ScottishWarningDialog {
  readonly dialogRef = inject(MatDialogRef<ScottishWarningDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'intermission-dialog',
  templateUrl: '../intermission-dialog/intermission-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class IntermissionDialog {
  readonly dialogRef = inject(MatDialogRef<IntermissionDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

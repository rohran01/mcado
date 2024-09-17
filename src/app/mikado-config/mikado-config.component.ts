import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButton } from '@angular/material/button';



@Component({
  selector: 'app-mikado-config',
  standalone: true,
  imports: [MatIcon, MatStepperModule, MatButton],
  templateUrl: './mikado-config.component.html',
  styleUrl: './mikado-config.component.scss'
})
export class MikadoConfigComponent implements AfterViewInit {

  @ViewChild(MatStepper) stepper: MatStepper | undefined;
  ngAfterViewInit() {
    if (this.stepper) this.stepper._getIndicatorType = () => 'number';
  }


  navNext(stepper: MatStepper) {
    stepper.next();
  }

  navBack(stepper: MatStepper) {
    stepper.previous();
  }
}

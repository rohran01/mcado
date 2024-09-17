import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScottishWarningDialogComponent } from './scottish-warning-dialog.component';

describe('ScottishWarningDialogComponent', () => {
  let component: ScottishWarningDialogComponent;
  let fixture: ComponentFixture<ScottishWarningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScottishWarningDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScottishWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

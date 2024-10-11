import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermissionDialogComponent } from './intermission-dialog.component';

describe('IntermissionDialogComponent', () => {
  let component: IntermissionDialogComponent;
  let fixture: ComponentFixture<IntermissionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermissionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

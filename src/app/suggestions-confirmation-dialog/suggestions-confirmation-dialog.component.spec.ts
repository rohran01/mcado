import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsConfirmationDialogComponent } from './suggestions-confirmation-dialog.component';

describe('SuggestionsConfirmationDialogComponent', () => {
  let component: SuggestionsConfirmationDialogComponent;
  let fixture: ComponentFixture<SuggestionsConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionsConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionsConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

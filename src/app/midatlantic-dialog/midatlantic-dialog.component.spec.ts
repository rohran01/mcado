import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidatlanticDialogComponent } from './midatlantic-dialog.component';

describe('MidatlanticDialogComponent', () => {
  let component: MidatlanticDialogComponent;
  let fixture: ComponentFixture<MidatlanticDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidatlanticDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidatlanticDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

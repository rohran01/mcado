import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikadoSelectionComponent } from './mikado-selection.component';

describe('MikadoSelectionComponent', () => {
  let component: MikadoSelectionComponent;
  let fixture: ComponentFixture<MikadoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikadoSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MikadoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

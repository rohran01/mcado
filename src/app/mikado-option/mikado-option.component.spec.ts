import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikadoOptionComponent } from './mikado-option.component';

describe('MikadoOptionComponent', () => {
  let component: MikadoOptionComponent;
  let fixture: ComponentFixture<MikadoOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikadoOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MikadoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikadoConfigComponent } from './mikado-config.component';

describe('MikadoConfigComponent', () => {
  let component: MikadoConfigComponent;
  let fixture: ComponentFixture<MikadoConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikadoConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MikadoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

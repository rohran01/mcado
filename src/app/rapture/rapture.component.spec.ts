import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureComponent } from './rapture.component';

describe('RaptureComponent', () => {
  let component: RaptureComponent;
  let fixture: ComponentFixture<RaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureShowCardComponent } from './rapture-show-card.component';

describe('RaptureShowCardComponent', () => {
  let component: RaptureShowCardComponent;
  let fixture: ComponentFixture<RaptureShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureShowCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaptureShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureSuggestionsComponent } from './rapture-suggestions.component';

describe('RaptureSuggestionsComponent', () => {
  let component: RaptureSuggestionsComponent;
  let fixture: ComponentFixture<RaptureSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureSuggestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaptureSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

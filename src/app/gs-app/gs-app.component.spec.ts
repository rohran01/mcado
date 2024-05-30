import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsAppComponent } from './gs-app.component';

describe('GsAppComponent', () => {
  let component: GsAppComponent;
  let fixture: ComponentFixture<GsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

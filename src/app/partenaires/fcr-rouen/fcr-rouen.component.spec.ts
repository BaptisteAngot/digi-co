import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcrRouenComponent } from './fcr-rouen.component';

describe('FcrRouenComponent', () => {
  let component: FcrRouenComponent;
  let fixture: ComponentFixture<FcrRouenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcrRouenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcrRouenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

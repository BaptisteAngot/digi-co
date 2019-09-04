import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasselinComponent } from './masselin.component';

describe('MasselinComponent', () => {
  let component: MasselinComponent;
  let fixture: ComponentFixture<MasselinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasselinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasselinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

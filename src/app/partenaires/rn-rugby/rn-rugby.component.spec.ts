import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnRugbyComponent } from './rn-rugby.component';

describe('RnRugbyComponent', () => {
  let component: RnRugbyComponent;
  let fixture: ComponentFixture<RnRugbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnRugbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnRugbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

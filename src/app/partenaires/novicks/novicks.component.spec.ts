import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovicksComponent } from './novicks.component';

describe('NovicksComponent', () => {
  let component: NovicksComponent;
  let fixture: ComponentFixture<NovicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentiolegComponent } from './mentioleg.component';

describe('MentiolegComponent', () => {
  let component: MentiolegComponent;
  let fixture: ComponentFixture<MentiolegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentiolegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentiolegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

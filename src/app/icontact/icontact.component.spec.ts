import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcontactComponent } from './icontact.component';

describe('IcontactComponent', () => {
  let component: IcontactComponent;
  let fixture: ComponentFixture<IcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

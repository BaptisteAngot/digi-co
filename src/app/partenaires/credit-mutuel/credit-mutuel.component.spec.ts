import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMutuelComponent } from './credit-mutuel.component';

describe('CreditMutuelComponent', () => {
  let component: CreditMutuelComponent;
  let fixture: ComponentFixture<CreditMutuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditMutuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMutuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

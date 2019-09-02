import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleclientComponent } from './articleclient.component';

describe('ArticleclientComponent', () => {
  let component: ArticleclientComponent;
  let fixture: ComponentFixture<ArticleclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

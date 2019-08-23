import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledeuxComponent } from './articledeux.component';

describe('ArticledeuxComponent', () => {
  let component: ArticledeuxComponent;
  let fixture: ComponentFixture<ArticledeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticledeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticledeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

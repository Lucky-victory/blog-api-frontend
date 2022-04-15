import { ComponentFixture, TestBed } from '@angular/core/testing';

import { singleArticleComponent } from './single-article.component';

describe('singleArticleComponent', () => {
  let component: singleArticleComponent;
  let fixture: ComponentFixture<singleArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ singleArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(singleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorImageComponent } from './author-image.component';

describe('AuthorImageComponent', () => {
  let component: AuthorImageComponent;
  let fixture: ComponentFixture<AuthorImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

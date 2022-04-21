import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavigateComponent } from './back-navigate.component';

describe('BackNavigateComponent', () => {
  let component: BackNavigateComponent;
  let fixture: ComponentFixture<BackNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNavigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

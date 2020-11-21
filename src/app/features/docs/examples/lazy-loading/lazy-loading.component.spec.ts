import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyLoadingComponent } from './lazy-loading.component';

describe('LazyLoadingComponent', () => {
  let component: LazyLoadingComponent;
  let fixture: ComponentFixture<LazyLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

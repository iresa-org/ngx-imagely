import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EagerLoadingComponent } from './eager-loading.component';

describe('EagerLoadingComponent', () => {
  let component: EagerLoadingComponent;
  let fixture: ComponentFixture<EagerLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EagerLoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

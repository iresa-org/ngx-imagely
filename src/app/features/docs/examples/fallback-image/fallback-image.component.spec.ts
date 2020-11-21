import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FallbackImageComponent } from './fallback-image.component';

describe('FallbackImageComponent', () => {
  let component: FallbackImageComponent;
  let fixture: ComponentFixture<FallbackImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FallbackImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallbackImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

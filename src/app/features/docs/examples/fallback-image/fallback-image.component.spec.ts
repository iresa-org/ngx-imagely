import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallbackImageComponent } from './fallback-image.component';

describe('FallbackImageComponent', () => {
  let component: FallbackImageComponent;
  let fixture: ComponentFixture<FallbackImageComponent>;

  beforeEach(async(() => {
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

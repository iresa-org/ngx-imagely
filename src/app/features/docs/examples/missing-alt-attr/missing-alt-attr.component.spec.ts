import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingAltAttrComponent } from './missing-alt-attr.component';

describe('MissingAltAttrComponent', () => {
  let component: MissingAltAttrComponent;
  let fixture: ComponentFixture<MissingAltAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissingAltAttrComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingAltAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

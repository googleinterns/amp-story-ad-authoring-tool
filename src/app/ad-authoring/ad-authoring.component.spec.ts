import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAuthoringComponent } from './ad-authoring.component';

describe('AdAuthoringComponent', () => {
  let component: AdAuthoringComponent;
  let fixture: ComponentFixture<AdAuthoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAuthoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAuthoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

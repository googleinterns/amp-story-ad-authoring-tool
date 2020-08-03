import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopBarComponent} from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create top bar component', () => {
    expect(component).toBeTruthy();
  });

  it('should have text in div element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(
      'AMP Story Ad Authoring!'
    );
  });
});

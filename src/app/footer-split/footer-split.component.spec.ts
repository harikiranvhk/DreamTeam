import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSplitComponent } from './footer-split.component';

describe('FooterSplitComponent', () => {
  let component: FooterSplitComponent;
  let fixture: ComponentFixture<FooterSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

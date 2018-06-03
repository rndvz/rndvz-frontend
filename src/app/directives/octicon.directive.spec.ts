import { OcticonDirective } from './octicon.directive';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('OcticonDirective', () => {
  let directive: OcticonDirective;
  let fixture: ComponentFixture<OcticonDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonDirective);
    directive = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});

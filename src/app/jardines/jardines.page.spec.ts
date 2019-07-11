import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JardinesPage } from './jardines.page';

describe('JardinesPage', () => {
  let component: JardinesPage;
  let fixture: ComponentFixture<JardinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JardinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JardinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

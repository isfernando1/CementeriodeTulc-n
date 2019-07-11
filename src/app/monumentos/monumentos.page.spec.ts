import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentosPage } from './monumentos.page';

describe('MonumentosPage', () => {
  let component: MonumentosPage;
  let fixture: ComponentFixture<MonumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

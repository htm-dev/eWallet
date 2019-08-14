import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsListComponent } from './icons-list.component';

describe('IconsListComponent', () => {
  let component: IconsListComponent;
  let fixture: ComponentFixture<IconsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

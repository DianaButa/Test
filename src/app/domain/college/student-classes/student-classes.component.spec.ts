/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentClassesComponent } from './student-classes.component';

describe('StudentClassesComponent', () => {
  let component: StudentClassesComponent;
  let fixture: ComponentFixture<StudentClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

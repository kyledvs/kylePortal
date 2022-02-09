import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocTestsComponent } from './add-doc-tests.component';

describe('AddDocTestsComponent', () => {
  let component: AddDocTestsComponent;
  let fixture: ComponentFixture<AddDocTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

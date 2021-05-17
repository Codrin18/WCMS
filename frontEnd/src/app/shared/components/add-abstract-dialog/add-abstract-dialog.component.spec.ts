import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbstractDialogComponent } from './add-abstract-dialog.component';

describe('AddAbstractDialogComponent', () => {
  let component: AddAbstractDialogComponent;
  let fixture: ComponentFixture<AddAbstractDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAbstractDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbstractDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

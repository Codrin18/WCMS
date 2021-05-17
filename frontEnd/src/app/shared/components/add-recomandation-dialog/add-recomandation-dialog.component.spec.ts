import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecomandationDialogComponent } from './add-recomandation-dialog.component';

describe('AddRecomandationDialogComponent', () => {
  let component: AddRecomandationDialogComponent;
  let fixture: ComponentFixture<AddRecomandationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecomandationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecomandationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

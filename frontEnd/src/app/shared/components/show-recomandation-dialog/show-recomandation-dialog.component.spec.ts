import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecomandationDialogComponent } from './show-recomandation-dialog.component';

describe('ShowRecomandationDialogComponent', () => {
  let component: ShowRecomandationDialogComponent;
  let fixture: ComponentFixture<ShowRecomandationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecomandationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecomandationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

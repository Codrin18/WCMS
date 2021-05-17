import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEvaluationsComponent } from './tab-evaluations.component';

describe('TabEvaluationsComponent', () => {
  let component: TabEvaluationsComponent;
  let fixture: ComponentFixture<TabEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

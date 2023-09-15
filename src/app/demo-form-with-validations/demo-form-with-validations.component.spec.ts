import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsComponent } from './demo-form-with-validations.component';

describe('DemoFormWithValidationsComponent', () => {
  let component: DemoFormWithValidationsComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormWithValidationsComponent]
    });
    fixture = TestBed.createComponent(DemoFormWithValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

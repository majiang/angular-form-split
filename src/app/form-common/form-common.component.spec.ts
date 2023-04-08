import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommonComponent } from './form-common.component';

describe('FormCommonComponent', () => {
  let component: FormCommonComponent;
  let fixture: ComponentFixture<FormCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

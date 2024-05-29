import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAbcComponent } from './form-abc.component';

describe('FormAbcComponent', () => {
  let component: FormAbcComponent;
  let fixture: ComponentFixture<FormAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAbcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

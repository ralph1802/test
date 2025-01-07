import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonRegisterComponent } from './submit-button-register.component';

describe('SubmitButtonRegisterComponent', () => {
  let component: SubmitButtonRegisterComponent;
  let fixture: ComponentFixture<SubmitButtonRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitButtonRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitButtonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

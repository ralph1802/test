import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPasswordInputRegisterComponent } from './confirm-password-input-register.component';

describe('ConfirmPasswordInputRegisterComponent', () => {
  let component: ConfirmPasswordInputRegisterComponent;
  let fixture: ComponentFixture<ConfirmPasswordInputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPasswordInputRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmPasswordInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

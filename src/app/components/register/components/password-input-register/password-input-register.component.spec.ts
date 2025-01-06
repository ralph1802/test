import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputRegisterComponent } from './password-input-register.component';

describe('PasswordInputRegisterComponent', () => {
  let component: PasswordInputRegisterComponent;
  let fixture: ComponentFixture<PasswordInputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

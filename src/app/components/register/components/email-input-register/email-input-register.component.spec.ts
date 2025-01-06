import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputRegisterComponent } from './email-input-register.component';

describe('EmailInputRegisterComponent', () => {
  let component: EmailInputRegisterComponent;
  let fixture: ComponentFixture<EmailInputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailInputRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

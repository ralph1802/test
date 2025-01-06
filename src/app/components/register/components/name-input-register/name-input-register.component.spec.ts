import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputRegisterComponent } from './name-input-register.component';

describe('NameInputRegisterComponent', () => {
  let component: NameInputRegisterComponent;
  let fixture: ComponentFixture<NameInputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameInputRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

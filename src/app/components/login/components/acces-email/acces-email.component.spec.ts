import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesEmailComponent } from './acces-email.component';

describe('AccesEmailComponent', () => {
  let component: AccesEmailComponent;
  let fixture: ComponentFixture<AccesEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesFacebookComponent } from './acces-facebook.component';

describe('AccesFacebookComponent', () => {
  let component: AccesFacebookComponent;
  let fixture: ComponentFixture<AccesFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesFacebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

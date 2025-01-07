import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesTwitterComponent } from './acces-twitter.component';

describe('AccesTwitterComponent', () => {
  let component: AccesTwitterComponent;
  let fixture: ComponentFixture<AccesTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesTwitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

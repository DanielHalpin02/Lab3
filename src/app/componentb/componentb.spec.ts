import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentb } from './componentb';

describe('Componentb', () => {
  let component: Componentb;
  let fixture: ComponentFixture<Componentb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentb],
    }).compileComponents();

    fixture = TestBed.createComponent(Componentb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

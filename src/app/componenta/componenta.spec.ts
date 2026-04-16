import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenta } from './componenta';

describe('Componenta', () => {
  let component: Componenta;
  let fixture: ComponentFixture<Componenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenta],
    }).compileComponents();

    fixture = TestBed.createComponent(Componenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

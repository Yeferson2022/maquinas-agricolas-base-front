import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPrestadoComponent } from './servicioPrestado.component';

describe('ServicioPrestadoComponent', () => {
  let component: ServicioPrestadoComponent;
  let fixture: ComponentFixture<ServicioPrestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioPrestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioPrestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

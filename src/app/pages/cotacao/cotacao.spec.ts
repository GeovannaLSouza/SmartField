import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cotacao } from './cotacao.component';

describe('Cotacao', () => {
  let component: Cotacao;
  let fixture: ComponentFixture<Cotacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cotacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cotacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

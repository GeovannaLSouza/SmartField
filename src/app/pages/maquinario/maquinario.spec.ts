import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maquinario } from './maquinario.component';

describe('Maquinario', () => {
  let component: Maquinario;
  let fixture: ComponentFixture<Maquinario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maquinario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maquinario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

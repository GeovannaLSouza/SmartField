import { Routes } from '@angular/router';
import { EmAltaComponent } from './pages/em-alta/em-alta.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { CotacaoComponent } from './pages/cotacao/cotacao.component';
import { MaquinarioComponent } from './pages/maquinario/maquinario.component';

export const routes: Routes = [
  { path: 'em-alta', component: EmAltaComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'cotacao', component: CotacaoComponent },
  { path: 'maquinario', component: MaquinarioComponent },
];

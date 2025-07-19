import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmAltaComponent } from './pages/em-alta/em-alta.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { CotacaoComponent } from './pages/cotacao/cotacao.component';
import { MaquinarioComponent } from './pages/maquinario/maquinario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    EmAltaComponent,
    ClimaComponent,
    CotacaoComponent,
    MaquinarioComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  scrollToSection() {
    const section = document.getElementById('news-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

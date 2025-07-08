import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'smartfield';

  scrollToNews() {
    const section = document.getElementById('news-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

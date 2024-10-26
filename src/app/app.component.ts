import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconComponent } from './components/icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  changeName = signal('icon-one')

  constructor() {
    setInterval(() => {
      this.changeName() === 'icon-one' ? this.changeName.set('icon-two') : this.changeName.set('icon-one')
    }, 2000)
  }
}

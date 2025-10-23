import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {
  title = 'angularapp'
}

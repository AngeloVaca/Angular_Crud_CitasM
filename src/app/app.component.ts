import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ConsultaComponent } from './consulta/consulta.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InicioComponent,AboutComponent,ConsultaComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'citas-app';
}

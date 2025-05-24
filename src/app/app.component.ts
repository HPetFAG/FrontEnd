import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HPet';
}

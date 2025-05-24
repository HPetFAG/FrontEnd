import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Eye, EyeClosed, LucideAngularModule } from 'lucide-angular';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'LoginPage',
  imports: [CommonModule, LucideAngularModule, LogoComponent, FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly EyeOpen = Eye;
  readonly EyeClosed = EyeClosed;

  isLogin = true;
  isCNPJ = false;
  isPasswordVisible: boolean = true;
  username: string = '';
  password: string = '';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login() {
    console.log('Login:', this.username, this.password);
  }

  registrar(){
    console.log('Registrar:', this.username, this.password);
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }
}

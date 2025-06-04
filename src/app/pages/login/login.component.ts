import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Eye, EyeClosed, LucideAngularModule } from 'lucide-angular';
import { LogoComponent } from '../../components/logo/logo.component';
import { Router } from '@angular/router';
import { UserService } from '../../service/users/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'LoginPage',
  imports: [
    CommonModule,
    LucideAngularModule,
    LogoComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly EyeOpen = Eye;
  readonly EyeClosed = EyeClosed;

  constructor(private router: Router, private userService: UserService) {}

  User: User = {
    name: '',
    document: '',
    email: '',
    phone: '',
    password: '',
  };

  isLogin = true;
  isCNPJ = false;
  isPasswordVisible: boolean = true;
  document: string = '';
  password: string = '';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login() {
    console.log('Login:', this.document, this.password);
    this.router.navigate(['/dashboard']);
  }

  CreateNewUser(): void {
    this.userService.createUser(this.User).subscribe(() => {
      this.toggleMode()
    }, (error) => {
      console.error("Error ao Criar usuario: ", error);
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }
}

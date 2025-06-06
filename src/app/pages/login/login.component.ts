import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Eye, EyeClosed, LucideAngularModule } from 'lucide-angular';
import { LogoComponent } from '../../components/logo/logo.component';
import { Router } from '@angular/router';
import { UserService } from '../../service/users/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth/auth.service';
import Swal from 'sweetalert2';
import { InputComponent } from "../../components/forms/input/input.component";

@Component({
  selector: 'LoginPage',
  imports: [
    CommonModule,
    LucideAngularModule,
    LogoComponent,
    FormsModule,
    ReactiveFormsModule,
    InputComponent
],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly EyeOpen = Eye;
  readonly EyeClosed = EyeClosed;
  isLogin = true;
  isPasswordVisible: boolean = true;

  User: User = {
    name: '',
    document: '',
    email: '',
    phone: '',
    password: '',
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  Authenticate(): void {
    var credentials = {
      document: this.User.document,
      password: this.User.password,
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        if (res.access_token) {
          this.router.navigate(['/dashboard']);

          console.log('Login bem-sucedido');
        } else {
          console.warn('Nenhum token recebido');
        }
      },
      error: (err) => {
        console.error('Error', err);

        if (err.status === 401 || err.status === 400) {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Documento ou senha invalidos.',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Estamos com erro no servidor!',
          });
        }
      },
    });
  }

  CreateNewUser(): void {
    this.userService.createUser(this.User).subscribe(
      () => {
        this.toggleMode();
      },
      (error) => {
        console.error('Error ao Criar usuario: ', error);
      }
    );
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}

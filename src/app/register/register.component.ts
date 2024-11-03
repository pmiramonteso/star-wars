import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isDarkMode = true;
  correoEnUso: boolean = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  Registrarse(): void {
    this.correoEnUso = false;

    if (this.form.valid) {
      this.userService.checkEmail(this.form.get('email')?.value).subscribe(
        (response) => {
          if (response.length > 0) {
            this.correoEnUso = true;
          } else {
            this.userService.register(this.form.value).subscribe(
              (response) => {
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('username', this.form.get('name')?.value);
                console.log('Usuario registrado', response);
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
                this.router.navigate([returnUrl]);
              },
              (error) => {
                console.error('Ha habido un error al registrar el usuario', error);
              }
            );
          }
        },
        (error) => {
          console.error('Error al verificar el correo', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}
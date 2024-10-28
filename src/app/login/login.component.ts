import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  userService = inject(UserService);

constructor() {
 this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.userService.login(this.form.value).subscribe(
        (response) => {
          localStorage.setItem('accessToken', response.accessToken);
        },
        (error) => {
          console.error('Ha habido un error al iniciar el usuario', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}

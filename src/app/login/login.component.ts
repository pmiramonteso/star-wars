import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formLogin: FormGroup;
  userService = inject(UserService);
  isModalOpen: boolean = false;
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  isDarkMode = true;
  loginError: boolean = false

constructor(private fb: FormBuilder) {
 this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
 
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  Login(): void {
    if (this.formLogin.valid) {
        this.userService.login(this.formLogin.value).subscribe(
            (response) => {
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('username', response.user.name);
                console.log('El usuario ha ingresado correctamente');
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
                this.router.navigate([returnUrl]);
            },
            (error) => {
                console.error('Ha habido un error al iniciar el usuario', error);
                this.loginError = true;
            }
        );
    } else {
        console.error('El formulario no es válido');
    }
}

}

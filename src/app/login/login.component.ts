import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  userService = inject(UserService);
  isModalOpen: boolean = false;
  private router = inject(Router);
  private route = inject(ActivatedRoute);

constructor(private fb: FormBuilder) {
 this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
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
                this.router.navigateByUrl('/starships');
                console.log('El usuario ha ingresado correctamente');
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

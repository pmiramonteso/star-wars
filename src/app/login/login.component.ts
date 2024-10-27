import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  userService = inject(UserService);

  constructor() {
 this.form = new FormGroup({
      user: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    const response = await this.userService.login(this.form.value);
    console.log(response);
  }
}

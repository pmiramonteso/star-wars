import { Component, inject } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent {

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

  onSubmit() {
    const response = await this.userService.register(this.form.value);
    console.log(response);
  }
}

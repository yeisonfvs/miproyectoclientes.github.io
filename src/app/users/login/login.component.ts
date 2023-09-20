import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup;
  login: any;
  
  


  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
    this.createFormLogin();

  }

  createFormLogin() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.required]],
    });
  }

  onSubmitLogin() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);

      this.userService.login(this.formLogin.value).subscribe(res => {
        console.log(res);
        if (!res.length) {
          console.log('erroe');
          this.formLogin.get('password')?.setErrors({ loginError: true });


        } else {
          console.log('logueado');
          this.redirectUsers();
        }
      });
      
    }
  }

  redirectUsers() {
    this.router.navigate(['/clientes/clientes']);
  }


}



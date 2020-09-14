import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('loginDialog')
  dialog: TemplateRef<any>;

  title: string;
  body: string;

  constructor(
    fb: FormBuilder,
    private loginService: LoginService,
    private modalService: BsModalService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService.login(
        email, password
      ).subscribe((resp => {
        if (!resp.success) {
          this.showMessage('Warning', resp.message);
        } else {
          sessionStorage.setItem('API-TOKEN', resp.token);
          this.router.navigate(['about']);
        }
      }));
    } else {
      this.showMessage('Error', 'Invalid form value!!!');
    }
  }

  showMessage(title: string, body: string): void {
    this.title = title;
    this.body = body;
    this.modalService.show(this.dialog);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mode } from 'src/app/model/mode.enum';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  mode: Mode;
  id: string;

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.activeRoute.params.subscribe(params => {

      if (params.id) {
        this.id = params.id;
        this.mode = Mode.UPDATE;
        this.userService.findById(this.id).subscribe(user => {
          this.userForm.patchValue(user);
        });
      } else {
        this.mode = Mode.ADD;
      }

    });

  }

  ngOnInit(): void {
  }

  onUserFormSubmit(): void {
    const { email, password } = this.userForm.value;
    if (this.userForm.valid) {
      if (this.mode === Mode.ADD) {
        this.userService.create({ email, password }).subscribe(_ => {
          this.router.navigate(['', 'admin', 'user', 'user-list']);
        });
      } else {
        this.userService.update(this.id, { email, password }).subscribe(_ => {
          this.router.navigate(['', 'admin', 'user', 'user-list']);
        });
      }
    }
  }

}


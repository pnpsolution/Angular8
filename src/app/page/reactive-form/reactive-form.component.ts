import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdvForm } from 'src/app/model/adv-form';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  advForm: FormGroup;
  @Output()
  formSubmit: EventEmitter<AdvForm> = new EventEmitter();

  data: AdvForm[] = [];
  current = new Date();

  constructor(fb: FormBuilder) {
    this.advForm = fb.group({
      code: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      name: ['', [Validators.required]]
    });

    // this.advForm.patchValue({
    //   code: '88888', name: 'xxxxx'
    // });
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    if (this.advForm.valid) {
      // alert('send data to server');
      this.data.push(this.advForm.value);
      this.formSubmit.emit(
        this.advForm.value
      );
    } else {
      alert('invalid form value');
    }
  }

}

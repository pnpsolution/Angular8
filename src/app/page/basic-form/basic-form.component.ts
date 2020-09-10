import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit, AfterViewInit {

  @ViewChild('basicForm') basicForm: NgForm;

  constructor() {
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  onSubmitForm(form: NgForm): void {
    if (form.valid) {
      alert('send data to server');
    } else {
      alert('invalid form');
    }
  }

  onSubmitForm2(): void {
    if (this.basicForm.valid) {
      alert('send data to server');
    } else {
      alert('invalid form');
    }
  }

}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  // users: User[];
  users: Observable<User[]>;
  title: string;
  body: string;

  @ViewChild('messageBox')
  messageBox: TemplateRef<any>;

  modalRef: BsModalRef;

  constructor(
    private userService: UserService,
    private modalService: BsModalService,
    private router: Router
  ) {
    // userService.findAll().subscribe(
    //   users => this.users = users
    // );
    this.users = userService.findAll();
  }

  ngOnInit(): void {
  }

  onDeleteClick(id: string): void {
    this.userService.deleteById(id).subscribe(_ => {
      this.users = this.userService.findAll();
      this.showMessage('Delete', 'Delete data complete!!');
    });
  }

  showMessage(title: string, body: string): void {
    this.title = title;
    this.body = body;
    this.modalRef = this.modalService.show(this.messageBox);
  }

  onEditClick(id: string): void {
    this.router.navigate(['', 'admin', 'user', 'user-form', id]);
  }

}

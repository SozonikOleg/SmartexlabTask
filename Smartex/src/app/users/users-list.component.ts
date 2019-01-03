import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css'],
})
export class UsersListComponent implements OnInit {
    public users = [];

    constructor(
        public usersService: UsersService,
        public router: Router
    ) {}

    public ngOnInit(): void {
        this.usersService.getUsers()
            .subscribe(users => this.users = <any>users);
    }

    public onOpenPopUp(id: string): void {
        this.router.navigate([{ outlets: { popup: `users/${id}`} }]);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: 'users-details.component.html',
  styleUrls: ['users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
    public user: any;

    constructor(
      public usersService: UsersService,
      public activatedRoute: ActivatedRoute,
      public router: Router
    ) {}

    public ngOnInit(): void {
      this.activatedRoute.params
        .mergeMap(({ id }) => {
          return this.usersService.getUserById(id);
        })
        .subscribe(user => this.user = user);

    }

    public onClosePopUp(): void {
      this.router.navigate([{ outlets: { popup: null } }]);
    }
}

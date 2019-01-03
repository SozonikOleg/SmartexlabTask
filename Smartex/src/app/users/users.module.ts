import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users.service';
import { UsersListComponent } from './users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    UsersService,
  ],
  exports: [
    UsersListComponent,
    UsersDetailsComponent,
  ]
})
export class UsersModule {}

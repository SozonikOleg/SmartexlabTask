import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users/users-list.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';

export const appRoutes: Routes = [
    { path: 'users', component: UsersListComponent },
    { path: 'users/:id', component: UsersDetailsComponent, outlet: 'popup' },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

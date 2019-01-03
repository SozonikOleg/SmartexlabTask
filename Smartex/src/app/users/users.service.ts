import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
    private API_URL = 'http://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<any> {
        return this.http.get(`${this.API_URL}/users`);
    }

    public getUserById(id: string): Observable<any> {
        return this.http.get(`${this.API_URL}/users/${id}`);
    }
}

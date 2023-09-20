import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  post() {
    throw new Error('Method not implemented.');
  }

  private usersUrl: string = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  constructor(private http: HttpClient) { }

  addUser(data: any) {
    return this.http.post(this.usersUrl, data, this.httpOptions);
  }

  login(data: any):Observable<any>{
    
    
    return this.http.get(`${this.usersUrl}?username=${data.username}&password=${data.password}`, this.httpOptions);

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { environment } from '../environments/environment';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }
  postLogin(data: any) {
    return this.http.post(`${this.apiURL}auth`,data)
  }

  postRegis(data: any) {
    return this.http.post(`${this.apiURL}users`,data)
  }

  isLogedIn(): boolean  {
    const data = localStorage.getItem('_token');
    if (!data) {
      return false;
    }
    else {
      return true;
    } 
  }
  getUser():any {
    const token = localStorage.getItem('_token');
    try {
      
     return jwtDecode(`${token}`)
    }
    catch (e) {
      return null;
    }
  }
  isAdmin(): boolean{
    return !this.getUser ? false : this.getUser().isAdmin;
  }
   getuserById(id:any):Observable<any>{
    return this.http.get(`${this.apiURL}getuserById/${id}`);
   }
}

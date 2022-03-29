import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public search = new BehaviorSubject<string>("");

  constructor(private http : HttpClient) { }
  getProduct () {
    return this.http.get<any>("https://gutendex.com/books")
    .pipe(map((res:any) => {
      return res;
    }))
  }

    ////*********yeni user kayıt işleminde, register işleminde apimize kayıt etme fonksiyonu. */
  postUser (user:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer f2eafbc1b31a1aba3e8d6215b7d952b1fdf7d75f1203a58dd8b82a5ec5e616d7'
    });
    let options = { headers: headers };
    this.http.post<any>('https://gorest.co.in/public/v1/users', user, options)
    .subscribe(res => {
      alert ("Kayıt başarılı" +res.data.id + res.data.email);

  });
  }

  getSingleUser(email:any,password:any): Observable<any>  {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer f2eafbc1b31a1aba3e8d6215b7d952b1fdf7d75f1203a58dd8b82a5ec5e616d7'
    });
    let options = { headers: headers };
    let url = ("https://gorest.co.in/public/v1/users"+`?name=${password}&email=${email}`);
    return this.http.get<any>(url,options);
  }
}

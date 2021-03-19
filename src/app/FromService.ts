import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FromModel } from '../app/FromModel';
@Injectable({
    providedIn: 'root'
  })
export class FromService{
    readonly rootUrl = "http://test9987.azurewebsites.net/api/Values/list/";
    constructor(private http: HttpClient) { 

    }
    public httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "test9987.azurewebsites.net",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Max-Age': '86400'
      })
    };
    public list: Array<FromModel> = [];  
    getList(input: string){
      this.http.get<Array<FromModel>>(this.rootUrl+input,this.httpOptions)
        .toPromise()
        .then(resp => this.list = resp as Array<FromModel>);
    }
  }
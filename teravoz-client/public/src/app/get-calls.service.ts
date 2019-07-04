import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Call } from './call.model';

@Injectable({
  providedIn: 'root'
})
export class GetCallsService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8000/calls/all';
  getCalls(){
    return this.http.get<Call[]>(this.url);
  }

}

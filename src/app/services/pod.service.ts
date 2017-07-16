import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PodService {

  constructor(private http: Http) {
    console.log('PodService Initialized...');
    var obj;
    this.getPods().subscribe(data => obj = data, error => console.log(error));
  }

  public getPods(): Observable<any> {
    return this.http.get("../../assets/data/mock-data.json")
      .map((res: any) => res.json());
  }
}


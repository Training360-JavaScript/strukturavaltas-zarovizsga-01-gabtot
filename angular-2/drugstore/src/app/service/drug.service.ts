import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drug } from '../model/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  entityUrl: string = environment.apiUrl + 'drugs';

  constructor( private http: HttpClient ) {
  }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>( this.entityUrl );
  }
}

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Construction } from 'src/app/model/construction';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  entityUrl: string = environment.apiUrl + 'constructions';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>( this.entityUrl );
  }

  get( id: number ): Observable<Construction> {
    return this.http.get<Construction>( `${this.entityUrl}/${id}` );
  }

  create( construction: Construction ): Observable<Construction> {
    return this.http.post<Construction>( this.entityUrl, construction );
  }

  update( construction: Construction ): Observable<Construction> {
    return this.http.patch<Construction>( `${this.entityUrl}/${construction.id}`, construction );
  }

  delete( id: number ): Observable<Construction> {
    return this.http.delete<Construction>( `${this.entityUrl}/${id}` );
  }
}

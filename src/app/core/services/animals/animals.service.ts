import { Injectable } from '@angular/core';
import { Animal } from './animals.models';
import { ANIMALS } from '../animals.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${environment.apiUrl}animals`);
  }

  public adoptAnimal(id: string): Observable<Animal> {
    return this.http.delete<Animal>(`${environment.apiUrl}animals/${id}`);
  }
}

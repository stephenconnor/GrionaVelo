import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutesData } from '../models/route.model';

@Injectable({ providedIn: 'root' })
export class RoutesService {
  private http = inject(HttpClient);

  getRoutes(): Observable<RoutesData> {
    return this.http.get<RoutesData>('routes.json');
  }
}

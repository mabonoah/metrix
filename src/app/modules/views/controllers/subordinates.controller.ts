import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class SubordinatesController {

  private url = '/subordinates.php';

  constructor(private apiService: APIService) { }

  getSubordinates(): Observable<any> {
    return this.apiService.post(this.url);
  }

}

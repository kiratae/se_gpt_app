import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EventFilter } from '../data/event-filter';
import { Event } from '../data/event';
import { Paging } from '../data/paging';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getList(filter: EventFilter, paging: Paging): Observable<any>{
    var data = filter == null ? [] : JSON.stringify(filter);
    return this.http.post(environment.apiUrl + '/event', data);
  }

  saveData(event: Event): Observable<Event>{
    var data = event == null ? [] : JSON.stringify(event);
    if(event.eventId == null) {
      return this.http.put<Event>(`${environment.apiUrl}/event`, data);
    }else{
      return this.http.put<Event>(`${environment.apiUrl}/event/${event.eventId}`, data);
    }
    
  }
  
}

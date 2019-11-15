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

  getList(filter: EventFilter, paging: Paging): Observable<any> {
    return this.http.get(`${environment.apiUrl}/event?keyword=${filter.keyword == null ? '' : filter.keyword}&page_no=${paging.pageNo == null ? '' : paging.pageNo}`);
  }

  getData(id: number): Observable<Event> {
    return this.http.get<Event>(`${environment.apiUrl}/event/${id}`);
  }

  saveData(event: Event): Observable<Event> {
    if (event.event_id == null) {
      event.create_user_id = 1;
      return this.http.post<Event>(`${environment.apiUrl}/event`, event);
    } else {
      event.modify_user_id = 1;
      return this.http.put<Event>(`${environment.apiUrl}/event/${event.event_id}`, event);
    }
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/event/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectFilter } from '../data/project-filter';
import { Paging } from '../data/paging';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Project } from '../data/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getList(filter: ProjectFilter, paging: Paging): Observable<any>{
    var data = filter == null ? [] : JSON.stringify(filter);
    return this.http.post(environment.apiUrl + '/project', data);
  }

  getData(id: number): Observable<Project>{
    return this.http.get<Project>(`${environment.apiUrl}/project/${id}`);
  }

  saveData(project: Project): Observable<Project>{
    var data = project == null ? [] : JSON.stringify(project);
    if(project.project_id == null) {
      return this.http.put<Project>(`${environment.apiUrl}/project`, data);
    }else{
      return this.http.put<Project>(`${environment.apiUrl}/project/${project.project_id}`, data);
    }
  }

  deleteData(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/project/${id}`);
  }
  
}

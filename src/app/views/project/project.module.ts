import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    ProjectRoutingModule
  ],
  declarations: [ ProjectComponent ]
})
export class ProjectModule { }

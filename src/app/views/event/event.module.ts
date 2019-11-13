import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    EventRoutingModule,
    SweetAlert2Module
  ],
  declarations: [ EventComponent ]
})
export class EventModule { }

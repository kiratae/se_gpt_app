import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    EventRoutingModule
  ],
  declarations: [ EventComponent ]
})
export class EventModule { }

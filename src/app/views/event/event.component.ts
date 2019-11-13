import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../models/services/event.service';
import { Paging } from '../../models/data/paging';
import { Event } from '../../models/data/event';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {

  @ViewChild('editModal', {static: false}) public editModal: ModalDirective;

  model: Event;
  datas: Array<Event>;
  totalItems: number = 10;
  itemsPerPage: number = 20;
  currentPage: number = 1;

  constructor(
    private eventService: EventService
  ) {
    this.model = new Event();
    this.datas = new Array<Event>();
  }

  ngOnInit() {
    this.getList();
  }

  getList(pageNo: number = 0) {
    var paging = new Paging();
    paging.pageNo = pageNo;
    paging.pageSize = this.itemsPerPage;
    this.eventService.getList(null, paging).subscribe(
      (res) => {
        this.totalItems = res['meta'].total_entries;
        this.currentPage = res['meta'].page_no + 1;
        this.datas = res['data'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveData(eventForm) {
    console.log(eventForm);
    console.log(this.model)
    this.eventService.saveData(this.model).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error(error);
      });
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}

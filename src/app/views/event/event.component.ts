import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../models/services/event.service';
import { Paging } from '../../models/data/paging';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EventModel } from '../../models/viewmodels/event-model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Event } from '../../models/data/event';
import { DIHelper } from '../../helper';

@Component({
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {

  @ViewChild('editModal', { static: false }) public editModal: ModalDirective;
  @ViewChild('successSwal') private successSwal: SwalComponent;

  model: EventModel;
  totalItems: number;
  itemsPerPage: number = 10;
  currentPage: number = 1;

  deleteName;

  constructor(
    private eventService: EventService
  ) {
    this.model = new EventModel();
  }

  ngOnInit() {
    this.getList();
    this.model.fillLookup();
  }

  getList(pageNo: number = 0) {
    var paging = new Paging();
    paging.pageNo = pageNo;
    paging.pageSize = this.itemsPerPage;
    this.eventService.getList(this.model.toEventFilter(), paging).subscribe(
      (res) => {
        console.log(res);
        this.totalItems = res.meta.total_entries;
        this.currentPage = res.meta.page_no + 1;
        this.model.events = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  edit(eventId: number) {
    this.eventService.getData(eventId).subscribe(
      (event) => {
        this.model.event = event;
        this.editModal.show();
      }
    );
  }

  saveData() {
    console.log(this.model)
    this.eventService.saveData(this.model.event).subscribe(
      (res) => {
        console.log(res);
        this.getList();
        this.editModal.hide();
        this.model.event = new Event();
        this.successSwal.title = "Saved !";
        this.successSwal.text = `Add new event successfully.`;
        this.successSwal.fire();
      },
      (error) => {
        console.error(error);
      });
  }

  deleteData(id: number, name: string) {
    this.eventService.deleteData(id).subscribe(
      (res) => {
        if (res['status']) {
          console.log(res['status']);
          this.getList();
          this.successSwal.title = "Success !";
          this.successSwal.text = `${name} has been deleted.`;
          this.successSwal.fire();
        } else {
          console.log('error');
        }
      }
    );
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}

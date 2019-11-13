import { Component, OnInit } from '@angular/core';
import { EventService } from '../../models/services/event.service';
import { Paging } from '../../models/data/paging';

@Component({
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {

  datas: Array<Event> = [];
  totalItems: number = 10;
  itemsPerPage: number = 20;
  currentPage: number = 1;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getList();
  }

  getList(pageNo:number = 0){
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

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}

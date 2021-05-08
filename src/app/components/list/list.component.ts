import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listItems: Observable<ListItem[]>;
  apiService: ApiService;
  showingDetail = false;
  item: ListItem | null;

  constructor(
    apiService: ApiService,
  ) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.listItems = this.apiService.getListItems();
  }

  showDetail(item: ListItem): void {
    this.showingDetail = true;
    this.item = item;
  }

  closeDetail(): void {
    this.showingDetail = false;
    this.item = null;
  }
}

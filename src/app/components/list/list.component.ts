import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listItems: Observable<ListItem[]>;
  apiService: ApiService;
  loadingService: LoadingService;
  showingDetail = false;
  item: ListItem | null;

  constructor(
    apiService: ApiService,
    loadingService: LoadingService,
  ) {
    this.apiService = apiService;
    this.loadingService = loadingService;
  }

  ngOnInit(): void {
    this.loadingService.isLoading.next(true);
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

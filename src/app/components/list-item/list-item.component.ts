import { Component, Output, Input, EventEmitter } from '@angular/core';

import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: ListItem;
  @Output() showDetail = new EventEmitter<ListItem>();

  openDetail(item: ListItem): void {
    this.showDetail.next(item);
  }
}

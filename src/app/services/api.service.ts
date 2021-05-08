import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ListItem } from '../models/list-item';

export const API = 'https://iwa-test.herokuapp.com/graphql';

const listItemsQuery = `
{
  articles {
    content
    coverImageUrl
    description
    subtitle
    title
    url
  }
}
`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getListItems(): Observable<ListItem[]> {
    return this.http.post<any>(`${API}`, { query: listItemsQuery })
      .pipe(
        map((response: any) => response.data && response.data.articles),
      );
  }
}

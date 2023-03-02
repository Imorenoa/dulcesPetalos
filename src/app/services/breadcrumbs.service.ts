import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  constructor() {}

  getBreadcrumbs(url: string): string[] {
    const parts = url.split('/');
    const crumbs = [parts[1]];
    if (parts.length > 3) {
      crumbs.push(parts[2]);
    }
    //console.log(crumbs);
    return crumbs;
  }
}

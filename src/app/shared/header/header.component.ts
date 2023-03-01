import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public subscriber: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  path: string[] = [];

  crumbs: string[] = [];

  ngOnInit(): void {
    this.subscriber = this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const url = event['url'];
          this.crumbs = this.breadcrumbsService.getBreadcrumbs(url);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }
}

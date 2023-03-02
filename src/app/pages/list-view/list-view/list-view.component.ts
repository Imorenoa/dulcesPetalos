import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

import { Flower } from 'src/app/interfaces/flower.interface';
import { FlowersService } from 'src/app/services/flowers.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  isLoadingFlowers: boolean = false;

  flowers: Flower[] = [];

  flowerSubject = new Subject<Flower[]>();

  constructor(private _flowersService: FlowersService) {}

  ngOnInit(): void {
    this.flowerSubject.pipe(debounceTime(500)).subscribe((flower: Flower[]) => {
      this.flowers = flower;
      console.log(this.flowers);
    });
    this.getFlowersData();
  }

  public getFlowersData() {
    this.isLoadingFlowers = true;
    this._flowersService.getFlowerList().subscribe({
      next: (flower) => {
        this.isLoadingFlowers = false;
        return (this.flowers = flower);
      },
      error: (error: any) => {
        this.isLoadingFlowers = false;
        console.error(error);
      },
    });
  }

  handleData(flower: Flower[]) {
    this.flowerSubject.next(flower);
  }
}

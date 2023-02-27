import { Component, OnInit } from '@angular/core';

import { Flower } from 'src/app/interfaces/flower.interface';
import { FlowersService } from 'src/app/services/flowers.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  flowers: Flower[] = [];

  constructor(private _flowersService: FlowersService) {}

  ngOnInit(): void {
    this._flowersService.getFlowerList().subscribe((flowers) => {
      this.flowers = flowers;
    });
  }
}

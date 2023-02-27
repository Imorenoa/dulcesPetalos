import { Component, Input, OnInit } from '@angular/core';

import { Flower } from 'src/app/interfaces/flower.interface';

@Component({
  selector: 'app-flower-item',
  templateUrl: './flower-item.component.html',
  styleUrls: ['./flower-item.component.css'],
})
export class FlowerItemComponent implements OnInit {
  @Input() flower!: Flower;

  constructor() {}

  ngOnInit(): void {
    console.log(this.flower);
  }
}

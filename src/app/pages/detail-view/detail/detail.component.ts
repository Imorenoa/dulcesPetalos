import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Flower } from 'src/app/interfaces/flower.interface';
import { FlowersService } from '../../../services/flowers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  isLoadingFlower: boolean = false;

  flower!: Flower;

  constructor(
    private _route: ActivatedRoute,
    private _flowersService: FlowersService
  ) {}

  ngOnInit() {
    const id: string = this._route.snapshot.params['id'];
    this.isLoadingFlower = true;
    this._flowersService.getFlowerItem(id).subscribe({
      next: (flower) => {
        this.isLoadingFlower = false;
        return (this.flower = flower);
      },
      error: (error: any) => {
        this.isLoadingFlower = false;
      },
    });
  }
}

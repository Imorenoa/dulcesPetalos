import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Flower } from 'src/app/interfaces/flower.interface';
import { FlowersService } from 'src/app/services/flowers.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() flowerEmitter: EventEmitter<Flower[]> = new EventEmitter<
    Flower[]
  >();

  flowers: Flower[] = [];

  searchValue = '';

  constructor(private _flowersService: FlowersService) {}

  ngOnInit(): void {}

  onSearchChange(searchValue: any): void {
    this.filterFlowerDataFromService(searchValue);
    this.flowerEmitter.emit(this.flowers);
  }

  filterFlowerDataFromService(filter: string) {
    this._flowersService.getFlowerList().subscribe({
      next: (flowers: Flower[]) => {
        if (filter === '') {
          this.flowers = flowers;
        } else {
          const filteredFlowers = flowers.filter(
            (flower) =>
              flower.name.toLowerCase().includes(filter.toLowerCase()) ||
              flower.binomialName.toLowerCase().includes(filter.toLowerCase())
          );
          this.flowers = filteredFlowers;
        }
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}

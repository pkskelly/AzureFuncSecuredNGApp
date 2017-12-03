import { Component, OnInit } from '@angular/core';
import { IGolfer } from './../models/golfer';
import { GolferService } from '../services/golfer.service';


@Component({
  selector: 'app-golfers',
  styleUrls: ['./golfer.component.css'],
  templateUrl: './golfer.component.html'
})
export class GolferComponent implements OnInit {

  golfers: IGolfer[];
  errorMessage: string;

  constructor(
    private golferService: GolferService
  ) { }

  ngOnInit(): void {
    this.GetGolfers();

    console.log(this.GetGolfers);
  }
  public GetGolfers(): void {
    this.golferService
      .getGolfers()
      .subscribe(golfers => this.golfers = golfers,
      error => this.errorMessage = <any>error);
  }
}


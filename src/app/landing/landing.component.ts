import { Component, OnInit } from '@angular/core';
import {Finiko} from "../@core/models/Finiko";
import {FinikoService} from "../@core/services/finiko.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  finiko: Finiko;

  constructor(private finikoService: FinikoService) { }

  ngOnInit(): void {
    this.finikoService.get('lzyWzAamqYJdLrhgncDg').pipe(
      take(1)
    ).subscribe(finiko => {
      this.finiko = finiko;
    });
  }

}

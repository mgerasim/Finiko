import {Component, HostListener, OnInit} from '@angular/core';
import {Finiko} from "../@core/models/Finiko";
import {FinikoService} from "../@core/services/finiko.service";
import {take} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'A') {
      this.router.navigate(['admin']).then();
    }
  };

  finiko: Finiko;

  constructor(
    public router: Router,
    private finikoService: FinikoService) { }

  ngOnInit(): void {

    this.finikoService.get('lzyWzAamqYJdLrhgncDg').pipe(
      take(1)
    ).subscribe(finiko => {
      this.finiko = finiko;
    });
  }

}

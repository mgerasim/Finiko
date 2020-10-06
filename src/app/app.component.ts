import {Component, OnInit} from '@angular/core';
import {FinikoService} from "./@core/services/finiko.service";
import {take} from "rxjs/operators";
import {Finiko} from "./@core/models/Finiko";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finiko';

  constructor() {
  }


}

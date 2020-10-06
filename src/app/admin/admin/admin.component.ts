import { Component, OnInit } from '@angular/core';
import {Finiko} from "../../@core/models/Finiko";
import {FinikoService} from "../../@core/services/finiko.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  finiko: Finiko;

  constructor(private finikoService: FinikoService) { }

  ngOnInit(): void {
    this.finikoService.get('lzyWzAamqYJdLrhgncDg').pipe(
      take(1)
    ).subscribe(finiko => {
      this.finiko = finiko;
    });
  }

  async save() {
    try {
      await this.finikoService.update(this.finiko);
      alert("Настройки успешно сохранены");
    } catch (e) {
      console.error(e);
    }

  }
}

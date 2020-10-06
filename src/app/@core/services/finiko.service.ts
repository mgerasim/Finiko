import { Injectable } from '@angular/core';
import {BaseService} from "../models/base/BaseService";
import {Finiko} from "../models/Finiko";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FinikoService extends BaseService<Finiko> {

  constructor(afs: AngularFirestore) {
    const path = 'finiko';
    super(path, afs);
  }
}

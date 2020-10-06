import {IBaseService} from "./IBaseService";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {IBaseEntity} from "./IBaseEntity";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export abstract class BaseService<T extends IBaseEntity> implements IBaseService<T> {

  protected collection: AngularFirestoreCollection<T>;

  protected constructor(path: string, protected afs: AngularFirestore) {
    this.collection = this.afs.collection(path);
  }

  add(item: T): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      this.collection.add(item).then(ref => {
        const newItem = {
          id: ref.id,
          /* workaround until spread works with generic types */
          ...(item as any)
        };
        resolve(newItem);
      });
    });
    return promise;
  }

  delete(id: string): void {
    const docRef = this.collection.doc<T>(id);
    docRef.delete();
  }

  get(identifier: string): Observable<T> {
    return this.collection
      .doc<T>(identifier)
      .snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            /* workaround until spread works with generic types */
            const data = doc.payload.data() as any;
            const id = doc.payload.id;
            return { id, ...data };
          }
        })
      );
  }

  list(): Observable<T[]> {
    return undefined;
  }

  update(item: T): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      const docRef = this.collection
        .doc<T>(item.id)
        .set(item)
        .then(() => {
          resolve({
            ...(item as any)
          });
        });
    });
    return promise;
  }

}

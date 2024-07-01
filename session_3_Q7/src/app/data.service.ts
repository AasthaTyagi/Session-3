import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<any>('')
  currentData = this.dataSource.asObservable()

  constructor() { }

  changeData(data: string){
    this.dataSource.next(data)
  }
}

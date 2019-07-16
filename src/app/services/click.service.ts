import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = 0;
  private sum = new Subject<number>();

  constructor(private log: LogService) { }

  addClicks(){
    this.sumClicks += 1;
    this.sum.next(this.sumClicks);
    this.log.logger("klik")
  }

  getSum(): Observable<number>{
    return this.sum.asObservable();
  }

}

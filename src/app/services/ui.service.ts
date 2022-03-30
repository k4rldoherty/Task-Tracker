import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  private showCardView: boolean = true;
  
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleCardView(): void {
    this.showCardView = !this.showCardView;
    this.subject.next(this.showCardView);
  }

}

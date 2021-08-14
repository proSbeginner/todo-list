import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class SelectedTaskStore {
  private subject = new BehaviorSubject<Task | undefined>(undefined)
  observer = this.subject.asObservable()

  set(task: Task) {
    this.subject.next(task)
  }
}
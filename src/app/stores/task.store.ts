import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskStore {
  private subject = new BehaviorSubject<Task[]>([])
  observer = this.subject.asObservable()

  get(): Task[] {
    return this.subject.value
  }

  add(task: Task) {
    this.get().push(task)
  }

  delete(task: Task) {
    const index = this.get().indexOf(task)
    if (index >= 0) {
      this.get().splice(index, 1)
    }
  }

  deleteAll() {
    this.subject.next([])
  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskStore } from 'src/app/stores/task.store';

@Component({
  selector: 'app-todo-title',
  templateUrl: './todo-title.component.html',
  styleUrls: ['./todo-title.component.css']
})
export class TodoTitleComponent implements OnInit {
  titleControl = new FormControl('')

  constructor(
    private taskStore: TaskStore,
  ) { }

  ngOnInit(): void {
  }

  clearAll() {
    this.taskStore.deleteAll()
  }

  add() {
    const task: Task = {
      title: this.titleControl.value.trim(),
      desc: ''
    }
    this.taskStore.add(task)
    this.titleControl.setValue('')
  }
}

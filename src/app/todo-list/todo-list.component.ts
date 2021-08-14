import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskControl = new FormControl('')
  items: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.items.push(this.taskControl.value.trim())
    this.taskControl.setValue('')
  }

  clearAll() {
    this.items = []
  }

  delete(index: number) {
    this.items.splice(index, 1)
  }
}

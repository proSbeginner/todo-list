import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TaskStore } from 'src/app/stores/task.store';
import { Task } from 'src/app/models/task'
import { SidenavService } from 'src/app/services/sidenav.service';
import { SelectedTaskStore } from 'src/app/stores/selected-task.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav | undefined
  tasks: Task[] = []

  constructor(
    private taskStore: TaskStore,
    private selectedTaskStore: SelectedTaskStore,
    private sidenavService: SidenavService,
  ) { }

  ngOnInit(): void {
    this.taskStore.observer.subscribe(tasks => {
      this.tasks = tasks
    })
  }

  ngAfterViewInit(): void {
    this.sidenavService.set(this.sidenav)
  }

  delete(task: Task) {
    this.taskStore.delete(task)
  }

  onSelected(task: Task) {
    this.selectedTaskStore.set(task)
    this.sidenavService.open()
  }
}

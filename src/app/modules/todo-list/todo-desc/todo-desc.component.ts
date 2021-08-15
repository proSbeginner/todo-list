import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { SidenavService } from 'src/app/services/sidenav.service';
import { SelectedTaskStore } from 'src/app/stores/selected-task.store';
import { TaskStore } from 'src/app/stores/task.store';

@Component({
  selector: 'app-todo-desc',
  templateUrl: './todo-desc.component.html',
  styleUrls: ['./todo-desc.component.css']
})
export class TodoDescComponent implements OnInit {
  titleControl = new FormControl('')
  descControl = new FormControl('')
  private selected: Task | undefined

  constructor(
    private selectedTaskStore: SelectedTaskStore,
    private taskStore: TaskStore,
    private sidenavService: SidenavService,
  ) { }

  ngOnInit(): void {
    this.selectedTaskStore.observer.subscribe(task => {
      this.selected = task
      this.titleControl.setValue(task?.title)
      this.descControl.setValue(task?.desc)
    })
  }

  save() {
    const selected = this.taskStore.get().find(t => t === this.selected)
    selected!.title = this.titleControl.value.trim()
    selected!.desc = this.descControl.value.trim()
    this.close()
  }

  close() {
    this.sidenavService.close()
  }
}

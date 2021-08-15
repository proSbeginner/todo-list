import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TodoDescComponent } from "./todo-desc/todo-desc.component";
import { TodoListRoutingModule } from "./todo-list-routing.module";
import { TodoListComponent } from "./todo-list.component";
import { TodoTitleComponent } from "./todo-title/todo-title.component";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoTitleComponent,
    TodoDescComponent,
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class TodoListModule { }
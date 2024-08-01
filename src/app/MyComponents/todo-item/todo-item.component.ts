import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Input() i: number = 0;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.deleteTodo.emit(todo);
    console.log('this button is clicked');
  }

  onCheckboxClick(todo: Todo) {
    console.log(todo);
    this.todoCheckbox.emit(todo);
  }
}

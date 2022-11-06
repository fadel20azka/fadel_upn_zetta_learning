import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  newTaskName = '';
  newTaskContent = '';
  @Output() taskCreated = new EventEmitter<{taskName: string,taskContent: string}>();
  @Output()groupTaskCreated = new EventEmitter<{taskName: string,taskContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask() {
    this.taskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

  onAddGroupTask() {
    this.groupTaskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

}

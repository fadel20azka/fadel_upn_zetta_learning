import { Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef, } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent 
implements  
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  OnDestroy 
  {
  newTaskName = '';
  newTaskContent = '';
  @Output() taskCreated = new EventEmitter<{taskName: string,taskContent: string}>();
  @Output()groupTaskCreated = new EventEmitter<{taskName: string,taskContent: string}>();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit Called!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit Called!');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit Called!');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroyCalled');
  }


  onAddTask() {
    this.taskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

  onAddGroupTask() {
    this.groupTaskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

}

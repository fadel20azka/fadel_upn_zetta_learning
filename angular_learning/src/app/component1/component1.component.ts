import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})

export class Component1Component implements OnInit {
  @Input('taskElement') element!: {type: string,name: string,content:string};
  constructor() { }

  ngOnInit(): void {
  }

}

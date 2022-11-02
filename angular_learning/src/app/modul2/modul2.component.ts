import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modul2',
  templateUrl: './modul2.component.html',
  styleUrls: ['./modul2.component.scss']
})
export class Modul2Component implements OnInit {

  profil = ['Ahmad','Rizal','Kimin', 'Hilman'];
  currentStatus1 = 'offline';
  currentStatus2 = 'offline';
  currentStatus3 = 'offline';
  currentStatus4 = 'offline'; 
  status = true;

  changeStatus1(){
    this.currentStatus1 = "online";
  }
  changeStatus2(){
    this.currentStatus2 = "online";
  }
  changeStatus3(){
    this.currentStatus3 = "online";
  }
  changeStatus4(){
    this.currentStatus4 = "online";
  }


  changeStatus5(){
    this.currentStatus1 = "offline";
  }
  changeStatus6(){
    this.currentStatus2 = "offline";
  }
  changeStatus7(){
    this.currentStatus3 = "offline";
  }
  changeStatus8(){
    this.currentStatus4 = "offline";
  }


  constructor() { }

  ngOnInit(): void {
  }

}


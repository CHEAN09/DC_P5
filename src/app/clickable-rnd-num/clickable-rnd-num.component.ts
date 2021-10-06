import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickable-rnd-num',
  templateUrl: './clickable-rnd-num.component.html',
  styleUrls: ['./clickable-rnd-num.component.css']
})
export class ClickableRndNumComponent implements OnInit {

  constructor() { this.generateRndNum() }

  ngOnInit(): void {
  }

  rndnum:any = []

  generateRndNum(){
    for(var i=0; i<6; i++){
      this.rndnum.push(Math.floor(Math.random() * 46) + 1);
    }
  }

  result:any;

  resultnum(num:number){
    this.result = num
  }

}

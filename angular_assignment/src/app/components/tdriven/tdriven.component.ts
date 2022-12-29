import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdriven',
  templateUrl: './tdriven.component.html',
  styleUrls: ['./tdriven.component.css']
})
export class TdrivenComponent implements OnInit{
  data1:any;
constructor(){}
ngOnInit(): void {
    
}
postdata(data: any){
this.data1=data;
console.log(this.data1)
}
}

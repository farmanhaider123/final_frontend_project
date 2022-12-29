import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
     
  total: any;
  quantity: any;
  q_data:any
  c_total:any
  mydata: any;
  prodata: any = [];
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.mydata = localStorage.getItem('prodata')
    this.c_total = localStorage.getItem('total')
    this.q_data=localStorage.getItem('quantity')
    this.total=JSON.parse(this.c_total)
    this.prodata = JSON.parse(this.mydata)
     this.quantity = JSON.parse(this.q_data)
    console.log(this.prodata)


  }
  order()
  {
   
    setInterval(() => {
         window.location.reload( )
},1000)
 
    this.router.navigate(['/order']) 
  }

}

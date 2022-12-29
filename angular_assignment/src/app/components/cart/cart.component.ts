import { JSDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  increasequantity: any;
  
  constructor(private pser: ProductServicesService, private route: ActivatedRoute, private router: Router) {

  }
  p_price = 0;
  quantity = 1;
  myData: any;
  proData: any = [];
  total=0;
  element: any
  arr: any;
  cdata: any;
  
  ngOnInit(): void {
   
    this.cdata = localStorage.getItem('mycart');
    this.arr = JSON.parse(this.cdata);
 
    this.arr.forEach((res1: any) => {
      this.pser.getProductById(res1).subscribe(res => {
        if (res) {
          this.myData = res;
          this.proData.push(this.myData);
           localStorage.setItem('prodata',JSON.stringify(this.proData))
          this.loadcart()
             localStorage.setItem('total',JSON.stringify(this.total))
            
           }
        
      })
           
    });
 
    
  
  }
  delPro(id: any) {

    console.log(id)
    Swal.fire({
      title: 'Are you Want to Remove ?',
      text: 'You will not be able to recover this product',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Delete It',
      cancelButtonText: 'No keep it'
    }).then((result) => {
      if (result.value) {
        this.proData.forEach((element: any, ind: any) => {
          if (id == this.proData[ind]._id) {
            this.proData.splice(ind, 1)
            this.arr.splice(ind, 1)
      
            console.log(this.arr)
            localStorage.removeItem('mycart')
            localStorage.setItem('mycart', JSON.stringify(this.arr))
           
            this.pser.setcart(this.proData);
            localStorage.setItem('total',JSON.stringify(this.total))
            this.loadcart()
            
          }
        
        });
      }
    })
   
  }
  loadcart() {
  
  this.total = 
this.proData.reduce
(function(acc:any, val:any){
  return  acc + (val.price * val.quantity);
  
}, 0);
       
}
  incQnt(prodId: any, qnt: any) {
    
    for (let i = 0; i < this.proData.length; i++) {
      if (this.proData[i]._id === prodId) {
        if (qnt != 5)
          this.proData[i].quantity = parseInt(qnt) + 1;
          localStorage.setItem('quantity',JSON.stringify(  this.proData[i].quantity))
      }
          console.log(this.proData[i].qnt)
    }
    this.loadcart()
    localStorage.removeItem('total')
    localStorage.setItem('total',JSON.stringify(this.total))
  }

  decQnt(prodId: any, qnt: any) {
    for (let i = 0; i < this.proData.length; i++) {
      if (this.proData[i]._id === prodId) {
        if (qnt != 1)
          this.proData[i].quantity = parseInt(qnt) - 1;
        localStorage.removeItem('quantity')
         localStorage.removeItem('prodata')
         localStorage.setItem('quantity',JSON.stringify(  this.proData[i].quantity))
        this.loadcart()
      }
    }
  }

  removeall()
  {
    localStorage.removeItem('mycart')
    localStorage.removeItem('prodata')
    localStorage.removeItem('total')
    window.location.reload();
  }
  checkout()
    
  {
    localStorage.removeItem('mycart')
   
    let c:any=localStorage.getItem('mycart')
    this.proData=JSON.parse(c)
 
    this.router.navigate(['/checkout'])
       this.pser.setcart(this.proData);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
 myData={category:'',pname:'',price:'',quantity:'',description:'',image:''}
  id:any;
  constructor(private pser:ProductServicesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.id=par['id'];
      this.pser.getProductById(this.id)
      .subscribe(res=>{
         if(res){
           this.myData={category:res.category,pname:res.pname,price:res.price,quantity:res.quantity,description:res.description,image:res.image}
         }
      })
    })
  }
  updatedata(){
      this.pser.updateData(this.myData,this.id)
      .subscribe(res=>{
        if(res){
          Swal.fire("Product Updated",'','success');
          this.router.navigate(['/products']);
        }
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
 myData={category:'',pname:'',price:'',quantity:'',description:'',image:''}
proData:any;
id:any;
constructor(private pser:ProductServicesService,private route:ActivatedRoute,private router:Router) { }
ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.id=par['id'];
      this.pser.getProductById(this.id)
      .subscribe(res=>{
         if(res){
         this.proData=res;
         }
      })
    })
}



}

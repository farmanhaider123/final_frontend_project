import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{


  p = 1;
 islogedin!: boolean;
  isadmin!: boolean;
   myData={category:'',pname:'',price:'',quantity:'',description:'',image:''}
   proData:any;
   filteredString:string='';
  value:string='';
  value1:string=' ';
   upid:string='';

  constructor(private pser:ProductServicesService,private auth:AuthServiceService) {

    console.log(this.value) }




  ngOnInit(): void {
    this.islogedin = this.auth.isLogedIn();
   this.isadmin = this.auth.isAdmin();
    this.pser.getAllProduct()
    .subscribe((res:any)=>{
        console.log(res);
        this.proData=res;
    })
  }
  onChange(){
this.value="price";
console.log(this.value)
  }
  delPro(id:any){
    Swal.fire({
      title:'Are you Want to Remove ?',
      text:'You will not be able to recover this product',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes Delete It',
      cancelButtonText:'No keep it'
    }).then((result)=>{
if(result.value)
this.pser.deleteData(id)
      .subscribe(res=>{
         if(res){
          Swal.fire("Product is  Deleted",'','success');
          let data=this.proData.filter((user:any)=> user._id!=id);
          this.proData=data;
           
         }
      })
    })
      
    }
    addCart(id:any){
     if(localStorage.getItem('mycart')!=undefined){
         let cdata:any=localStorage.getItem('mycart');
         let arr=JSON.parse(cdata);
         if(arr.includes(id)){
          Swal.fire("Product Already in a cart",'','warning')
         }
         else {
          arr.push(id);
          localStorage.setItem('mycart',JSON.stringify(arr));
          this.pser.setcart(arr)
      Swal.fire("Add Cart Succuessfully",'','success')
       }
       
     }
     else {
      let arr=[];
      arr.push(id);
      localStorage.setItem('mycart',JSON.stringify(arr));
       this.pser.setcart(arr)
       let arr1=this.proData;
       console.log(arr1)
    Swal.fire("Add Cart Succuessfully",'','success')
     }
  }
  }
   

 




import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
  value = 0;
  filteredString:string='';
  count = 0;
  user: any=[];
  islogedin!: boolean ;
  isadmin!: boolean;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  myuser: any;
constructor(private pser:ProductServicesService,private auth:AuthServiceService,private router:Router){

}
  
  ngOnInit() {
   
    this.islogedin = this.auth.isLogedIn();
    this.isadmin = this.auth.isAdmin();
    
    this.user = localStorage.getItem('userdata');
    this.myuser=JSON.parse(this.user);
     console.log(this.myuser)
    if(localStorage.getItem('mycart')!=undefined){
      let cdata:any=localStorage.getItem('mycart');
      let data=JSON.parse(cdata);
      this.count = data.length;
      
    }
    this.pser.subject.subscribe((res:any)=>{
      let data=res.cartData;
      this.count=data.length;
      console.log(data)
    })
  }
  logout() {
    localStorage.removeItem('_token');
    localStorage.removeItem('userdata');
     this.router.navigate(['/signin']).then(() => {
            window.location.reload();
          })
 }
   toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

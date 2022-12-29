import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    islogedin!: boolean ;
  isadmin!: boolean;
constructor(private pser:ProductServicesService,private auth:AuthServiceService,private router:Router){

}
  ngOnInit() {
   
    this.islogedin = this.auth.isLogedIn();
    this.isadmin = this.auth.isAdmin();
  }
}

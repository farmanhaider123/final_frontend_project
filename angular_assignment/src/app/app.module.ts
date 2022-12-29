import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewComponent } from './components/view/view.component';
import { TdrivenComponent } from './components/tdriven/tdriven.component';
import { RegisComponent } from './components/regis/regis.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';    
import {MatSelectModule} from '@angular/material/select';
import { AppNgForLoopDirective } from './app-ng-for-loop.directive';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { ContactusComponent } from './components/contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    AddproductComponent,
    EditproductComponent,
    HomeComponent,
    CartComponent,
    ViewComponent,
    TdrivenComponent,
    RegisComponent,
    FilterPipe,
    SortPipe,
    AppNgForLoopDirective,
    SigninComponent,
    SignupComponent,
    SidenavComponent,
    CheckoutComponent,
    OrdersummaryComponent,
    ContactusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, MatSelectModule, BrowserAnimationsModule,
     MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
 API=`http://127.0.0.1:1199/`;
 public subject=new Subject();
  constructor(private http:HttpClient) { }
   getAllProduct():Observable<any>{
    return this.http.get(`${this.API}getproducts`);
   }
   getProductById(id:any):Observable<any>{
    return this.http.get(`${this.API}getProductById/${id}`);
   }
   postData(data:any):Observable<any>{
      return this.http.post(`${this.API}addedproduct`,data);
   }
   updateData(data:any,id:any):Observable<any>{
    return this.http.put(`${this.API}editD/${id}`,data);
   }
   deleteData(id:any):Observable<any>{
    return this.http.delete(`${this.API}deleteDATA/${id}`);
   }
    setcart(data:any){
      this.subject.next({cartData:data});
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageError': true };
    }
    return null;
}

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
myForm=new FormGroup({
       fullname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
        email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        mobile:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]),
         age:new FormControl('',[Validators.required,ageRangeValidator]),
        password:new FormControl('',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
        gender:new FormControl('',[Validators.required]),
        acceptTerms:new FormControl('',[Validators.required]),
      })
   
  constructor() { }
   get fdata(){
     return this.myForm.controls;
   }
  ngOnInit(): void {
  }
  postData(){
    console.log(this.myForm.getRawValue())
  }
}

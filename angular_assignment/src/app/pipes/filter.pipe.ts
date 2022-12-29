import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string) {
     if(value.length===0||filterString===''){
return value;
     }
    const proData:any=[];
  for (const p of value){
    if(p['category']==filterString || p['pname']==filterString ){
      proData.push(p);
    }
    else if(p['price']==filterString)
    {
       proData.push(p);
    }
    else if(p['price']>filterString){
 proData.push(p);


    }
  }
  return proData;
  }
 
   
    
   
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CakeService {
  port:number = 8080
  


  constructor(private https:HttpClient) {

   }

  login(url:any,body:any){
    return this.https.post(url,body)
  }

  post(url:any,body:any){
      return this.https.post(url,body)
  }

  ascending(data:any,property:string){
    data.sort((obj1:any,obj2:any)=>{
      return obj1[property] - obj2[property];
    })
    return data
  }

  descending(data:any,property:string){
    data.sort((obj1:any,obj2:any)=>{
      return obj2[property]-obj1[property];
    })
    return data
  }

  getCakeDetail(url:string){
    return this.https.get(url)
  }

  search(url:any){
    return this.https.get(url)
  }

  addtoCart(url:any,body:any,options:any){
    return this.https.post(url,body,options)
  }
  
  cartItems:any
  price:any
  userDetails:any
  getCart(){
    const url="https://apifromashu.herokuapp.com/api/cakecart"
    let myHeader = new HttpHeaders()
    myHeader=myHeader.append('authtoken',localStorage["token"])
    let options={headers:myHeader}

    return this.https.post(url,{},options)
    
  }


  addCakeOrder(body:any){
    const url="https://apifromashu.herokuapp.com/api/addcakeorder"
    let myHeader=new HttpHeaders()
    myHeader=myHeader.append('authtoken',localStorage["token"])
    let options={
      headers:myHeader
    }
    return this.https.post(url,body,options)
  }
  
  cake_post(url:any,body:any){
    let myHeader=new HttpHeaders()
    myHeader=myHeader.append('authtoken',localStorage["token"])
    let options={headers:myHeader}
    
    return this.https.post(url,body,options)
  }

}

import { Component, OnInit } from '@angular/core';
import {CakeService} from "src/app/service.service"
import {Router} from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems:any=[]
  totalAmount:number=0
  constructor(private service:CakeService,private router:Router) {
    console.log("called")
        this.service.getCart().subscribe({
          next:(response:any)=>{
            this.cartItems=response.data
            this.cartItems.map((item:any)=>{
              this.totalAmount+=item.quantity*item.price
            })
          },
          error:(error)=>{
            console.log(error)
          }
        })
   }

   inc_dec(character:string,index:any){
     let body={
       cakeid:this.cartItems[index].cakeid,
     }
     if(character=="-"){
       console.log("decrement has been called")
      this.service.cake_post("https://apifromashu.herokuapp.com/api/removeonecakefromcart",body).subscribe({
        next:(response:any) => {
          if(response && this.cartItems[index].quantity>1){
            console.log(this.cartItems)
            this.cartItems[index].quantity-=1;
            this.totalAmount-=this.cartItems[index].quantity * this.cartItems[index].price
          }
          else if(this.cartItems[index].quantity==1 && this.cartItems.length>1){
            this.removefromcart(body.cakeid,index)
          }
          else{
            this.cartItems.pop()
          }
        },
        error:(error)=>{
          console.log(error)
        }
      })
     }
     else{
       this.service.cake_post("https://apifromashu.herokuapp.com/api/addcaketocart", this.cartItems[index]).subscribe({
          next:(response:any)=>{
            if(response){
              console.log(this.cartItems)
              this.totalAmount+=this.cartItems[index].price
              this.cartItems[index].quantity+=1;
            
            }
          }
       })
       
     }
   }

   removefromcart(cakeid:any,index:any){
    this.totalAmount-=this.cartItems[index].quantity * this.cartItems[index].price
      this.cartItems=this.cartItems.filter((item:any)=>{
        return item.cakeid!=cakeid
      })
     
   }
  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
  }

}

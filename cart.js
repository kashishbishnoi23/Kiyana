
//  add to cart:
import {Clothing} from './Clothing/Western/casuals.js'
import {footwear}  from './Footwear/footwear.js';
import {accessories}  from './Accessories/accessories.js';


let allProducts = [...Clothing, ...footwear, ...accessories];

let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=[];
}

// import {loadCart} from "./cart.html"

export function addToCart(id, quantity, color, size){
    
    let obj = {id, quantity, color, size};

    allProducts.forEach((item)=>{
       
        if (item.id == id){
            obj.brand = item.brand
            obj.product = item.name
            obj.color = color
            obj.size = size
            obj.price = item.price
            obj.quantity = quantity
            obj.image = item.images[color]
            obj.total = quantity*item.price

            console.log("cart = ", cart);
            // console.log(typeof(cart));

            cart = [...cart, obj]
            
            console.log("after cart = ", cart);
            localStorage.setItem('cart', JSON.stringify(cart));
     
        }

    })

    
}

export function updateCart(id, task){
    console.log("hiiiiiii")
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (task == "increaseQuantity"){

         cart.forEach((item)=>{
          if (item.id == id){
              item.quantity ++;
              item.total = item.quantity*item.price;
              console.log("after adding cart = ", cart);
              localStorage.setItem('cart', JSON.stringify(cart));
            //   loadCart()

          }

        })
    } else if (task == "decreaseQuantity"){



        console.log("cart = ", cart)
        // console.log("product id = ", product_id);

         cart.forEach((item)=>{
          if (item.id == id){
              if (item.quantity > 1){
              item.quantity --;
              item.total = item.quantity*item.price;
              console.log("after adding cart = ", cart);
              localStorage.setItem('cart', JSON.stringify(cart));
              }
            //   loadCart();

          }

        })

    } else if (task == "delete"){

        const updated_array = cart.filter(item => item.id != id);

        localStorage.setItem('cart', JSON.stringify(updated_array));
        
        

    }

}


export default cart;



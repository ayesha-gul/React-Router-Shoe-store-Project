import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ProductData } from './ProductData'

export const ProdutDetails = () => {
    const shoes = {
        "first-key": {
            names:   "S1 Mid-Canvas-black",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SMT00001-BLB-B_1800x1800.jpg?v=1617058743",
            price: '$14.00',
        },
        "Second-key" : {
            names: "Barney  -  leather ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SBT00001-BRN-B_1800x1800.jpg?v=1612300405",
            price: '$24.00',
         },
    
        "third-key" : {
            names: "S1 Mid- Canvas - white",
            img:'https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SMT00001-WHT-B_1800x1800.jpg?v=1617058745',
            price: '$16.00',
         },
        "fourth-key" : {
            names: "S1 Suede- Camo  - Army ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00007-CMO-B_1800x1800.jpg?v=1618846093",
            price: '$30.00',
         },
        "fifth-key" : {
            names: "S1 Suede- Brown  - Casual ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00007-BRN-B_1800x1800.jpg?v=1616687277",
            price: '$28.00',
         },
        "sixth-key" : {
            names: "S1 Suede- Canvas  - Navy ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00001-NVY-B_1800x1800.jpg?v=1612394551",
            price: '$14.00',
         },
        "seventh-key" : {
            names: "S1 Suede- Canvas  - Taupe ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00003-TAU-B_1800x1800.jpg?v=1612386874",
            price: '$13.00',
        
        },
        "eigth-key" : {
            names: "S1 Suede- Canvas  - black ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00003-NVY-C_1800x1800.jpg?v=1612386820",
            price: '$27.00',
         },
        "nith-key" : {
            names: "S1 Suede- Canvas  - Choco ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00003-CHO-C_1800x1800.jpg?v=1612386802",
            price: '$49.00',
         },
           
           
           
           
              
    }
const {id}= useParams();
const shoe = shoes[id];
console.log(id);
console.log(shoe);


if(!shoe) {
    return <h2>Not Found</h2>
}
const {names,img,price} = shoe;
console.log(price);

    return (
        <div className='parent'>
        <div className='details'>
             <h2>{names}</h2>
             <strong>{price} </strong>
             <p id='ship'>shipping calculated at checkout</p>
             <br></br> 
            <hr></hr>
            <br></br>
            <div className='btn'>
                
                 <button> <strong> Add to cart</strong></button>
           {/* <input type="button"  text='Add to cart' width={100}/> */}

             </div>
             </div>
           
            

             <div className="hope">
             <img src={img} alt={names}  height={700} width={700}/>
             </div>
             
             
            
        
        </div>
    )
}


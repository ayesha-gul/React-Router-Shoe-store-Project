import React from 'react'
import { Link } from 'react-router-dom'

export const ProductData = () => {
    const shoes = {
        "first-key": {
            names:   "S1 Mid-Canvas-black black",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SMT00001-BLB-A_1800x1800.jpg?v=1617058743",
            price: '$14.00',
          
        },
        "Second-key" : {
            names: "Barney  -  leather  - Brown",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SBT00001-BRN-A_1800x1800.jpg?v=1612300405",
            price: '$24.00',
          
        },

        "third-key" : {
            names: "S1 Mid- Canvas - white",
            img:"https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SMT00001-WHT-A_1800x1800.jpg?v=1617058744",
            price: '$16.00',
          
        },
        "fourth-key" : {
            names: "S1 Suede- Camo  - Army ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00007-CMO-A_1800x1800.jpg?v=1618845760",
            price: '$30.00',
          
        },
        "fifth-key" : {
            names: "S1 Suede- Brown  - Casual ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00007-BRN-A_1800x1800.jpg?v=1616687274",
             price: '$28.00',
          
        },
        "sixth-key" : {
            names: "S1 Suede- Canvas  - Navy ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00001-NVY-A_1800x1800.jpg?v=1612394551",
             price: '$14.00',
          
        },
        "seventh-key" : {
            names: "S1 Suede- Canvas  - Taupe ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00003-TAU-A_07d00c29-a986-43ff-996c-dd1015c99ddf_1800x1800.jpg?v=1612825031",
            price: '$13.00',
          
        },
        "eigth-key" : {
            names: "S1 Suede- Canvas  - black ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00003-BLK-A_1800x1800.jpg?v=1612386793",
             price: '$27.00',
          
        },
        "nith-key" : {
            names: "S1 Suede- Canvas  - Choco ",
            img: "https://cdn.shopify.com/s/files/1/0053/4999/8661/products/SLT00003-CHO-A_1800x1800.jpg?v=1612386803",
             price: '$49.00',
          
        },
           
           
           
           
              
    }







    return (
        <div className='joti'>
            <ul>
                {Object.entries(shoes).map( ([key,{names,img,price}]) =>(
                    <li key={key}>
                        <Link  to={`/product/${key}`}>
                       
                        <img src={img}  alt="shoes" width={410} height={414} ></img>
                        <h3> {names}</h3>
                        <p className="p">{price}</p>
                        </Link>

                    </li>
                ))}
            </ul>
         
        </div>
    )
}

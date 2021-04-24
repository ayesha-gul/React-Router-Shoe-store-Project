import React from 'react'
import { Outlet } from 'react-router'


export const Products = () => {
    return ( 
        <div>
        <div className='hye'>
        <div className='h2' >
   
               
         
            <h2  >Simple Shoes Products </h2>
            </div>
            <div className="para">
            <p>These are quality basic shoes that work with any style.</p>

            </div>
            </div>
          <Outlet />
     
        </div>
    )
}

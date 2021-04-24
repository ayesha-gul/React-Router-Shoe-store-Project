import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
export const Header = () => {
    return (
        <div className="header">
             <nav className="homi" >
                        <Link to="/">Home</Link>
                     
                    
                         
                
                        <div className='prod' >
                     <Link to="product">Products</Link>
                             </div>
            
          
              
                             
                   </nav>
                   {/* <div className="head">
         <h5> The s1 - now in the mid-top & suede - shop now </h5>

        </div> */}
             
        </div>
    )
}

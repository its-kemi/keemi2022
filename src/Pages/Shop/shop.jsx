import react from 'react'
import { PRODUCTS } from '../../data/products';
import product from './product'

const Shop=()=>{
    return(
        <react.Fragment>         
         <h1>Shop</h1>
        <div className='raw'>{PRODUCTS.map((productData)=>
             <product key={productData.id} data={productData}/>
        )}
        </div>  
         </react.Fragment>
   
    )
}



export default Shop;
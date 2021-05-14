import react from "react";
import products from "../fakedata.js";

class ProductDetails extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
      <div className="ProductDetails">
{ products.map((element)=>{
    if(element.stock===0){
        return;
    }
    return(
        
    <div>
        
        <h1 className="name">{element.name}</h1>
        <h4>
            price:{element.price} 
            stock:{element.stock} 
            rating:{element.rating}
        </h4>
        <p className="description">{element.description}</p>
        <img src={element.image} alt={element.category} />
       
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Buy</button>
       
        </div>
    )
})}
      </div>
             
        )
    }

}






export default ProductDetails;
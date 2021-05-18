import react from "react";
import products from "../fakedata.js";
import RatingIcon from "./starsrating.js"
class ProductDetails extends react.Component{
    constructor(props){
        super(props)
        this.state={
            rating:0,
            hoverRating:0,
        }
        //this.onMouseEnter=this.onMouseEnter.bind(this)
        //this.onMouseLeave=this.onMouseLeave.bind(this)
        //this.onSaveRating=this.onSaveRating.bind(this)
    }
    onMouseEnter(index){
        this.setState({
            hoverRating:index
        })
       }
       onMouseLeave(){
        this.setState({
            hoverRating:0
        })
       }
       onSaveRating(index){
        this.setState({
            rating:index
        })
       }
    render(){
        return(
      <div     className="ProductDetails">
{ products.map((element , index)=>{
     var link =  element.name.replace(/\s+/g, '-').toLowerCase()
    if(element.stock===0){
        return;
    }
    return(
        
    <div id={link} className="products"  >
     
        <img class="w-full" src={element.image} alt={element.category} onClick={()=>{this.props.handleView()}}/>
        <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2" className="name">{element.name}</h1>
        <h4 className="details">
            price:{element.price} 
            stock:{element.stock} 
            rating:{element.rating}
            Brand:{element.brand}
        </h4>
        </div>
        <div className="box flex">
      {[1, 2, 3, 4, 5].map((index,key) => {
        return (
          <RatingIcon 
          key={key}
            index={index} 
            rating={this.rating} 
            hoverRating={this.hoverRating} 
            onMouseEnter={this.onMouseEnter.bind(this)} 
            onMouseLeave={this.onMouseLeave.bind(this)} 
            onSaveRating={this.onSaveRating.bind(this)} />
        )
      })}
    </div>
       <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"  onClick={()=>{this.props.handleView('product')}}>Buy</button>
       
        </div>
    )
})}
      </div>
             
        )
    }

}






export default ProductDetails;
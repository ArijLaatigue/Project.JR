import react from "react";
import BarSearch from "./barSearch.js";
import ProductDetails from "./ProductDetails.js"



class Home extends react.Component {
  constructor(props) {
    super(props);
   
    }
  render() { return (

    <div>
      <div>
      <Greeting isLoggedIn={false} />,
      </div>
      <div className="searchbar">
<BarSearch/>
      </div>
      <div className="ProductDetails">
  <ProductDetails />
    </div>
    </div>
  )}
}

export default Home;

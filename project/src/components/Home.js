import react from "react";
import SingleProduct from './product.js'
import ProductDetails from "./ProductDetails.js"
import Login from "./auth/login.js";
import axios from "axios";
import products from "../fakedata.js";


 class Home extends react.Component {
  constructor(props) {
    super(props);
    this.state={
      view:'Home'
    }

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleView = this.handleView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

handleView(option){
  this.setState({
    view:option
  })
}
renderView() {
  const { view } = this.state;

  if (view === "product") {
    return <SingleProduct/>
  } else {
    return <div className="ProductDetails">
    <ProductDetails handleView={this.handleView}/>
   </div>;;
  } 
}

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }
  render() { return (

    <div>
      <div className="auth">
      <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
     
      <div className="main">{this.renderView()}</div>
      </div>
   
  )}
}

export default Home;
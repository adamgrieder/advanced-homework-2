import React from "react";
import "./App.css";

import Header from "./components/Header";
 import SubHeader from "./components/SubHeader";
 import TopNav from "./components/TopNav";
 import ImageSlider from "./components/ImageSlider";
 import ProductDetail from "./components/ProductDetail";
 import Footer from "./components/Footer";

function App(props) {
  let p = props.state.products;
    let filteredDivs = props.state.products.filter(product => product.category === props.currentCategory);
    let productDivs = filteredDivs.slice(0, 5).map((filteredDivs) => {
      return <ProductDetail product={filteredDivs} />;
    });
    return (
      <div className="App">
        <div className="wrap">
   			    <div className="header">
   	          <Header />
   			      <div className="clear"> </div>
   			      <SubHeader />
   			      <div className="clear"> </div>
   			      <TopNav changeCategory={props.changeCategory} />
   			    </div>
   					<ImageSlider />
   				  <div className="content">
   					  <div className="products-box">
   					    <div className="products">
   						    <h5><span>FEATURED</span> PRODUCTS</h5>
   						    <div className="section group">
   							  {productDivs}
						    </div>
                <div className="products products-secondbox">
   						    <h5><span>Our</span> Specials</h5>
   						    <div className="section group">
   					      {productDivs}
							</div>



			</div>
      <div className="clear"> </div>
 			    <Footer />
 		    </div>
		</div>

      </div>
    );
}

export default App;

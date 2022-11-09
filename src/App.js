import "./App.css";
import { useState , useRef} from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import 'bootstrap/dist/css/bootstrap.min.css';

import CartList from "./components/CartList"
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotalValue] = useState(0);
  const [cart, setCart] = useState([]);
  const [currItem, setItem] = useState ({name:"", count:"", key:""})
  const count = useRef({});



  return (
    <div className="App">
      <h1 className="header">My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="parent">
        <div className="BakeryItems child">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem  key={index.toString()} name={item.name} image={item.image} price={item.price} 
            description={item.description} setTotal={setTotalValue} total={total} 
            cart={cart} setCart={setCart}
            item={item} currItem={currItem} setItem={setItem} index={index}
            count={count}
            /> 
            // replace with BakeryItem component
          ))}
        </div>

        <div className="child right-section">
          <h2> Total: {total.toFixed(2)} </h2>

          <br/>
          <br/>
          {/* <Button variant="primary" onClick={handleShow}>View Cart</Button> */}
          {/* TODO: render a list of items in the cart */}
          <CartList list={cart} count={count} />
          
        </div>
      </div>
    </div>
  );
}

export default App;

// TODO: create a component that displays a single bakery item
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function BakeryItem(props){
    const addItem =()=> {
        props.setTotal(props.total + props.price);
        

        // if (props.item.name in props.cart) {
        //   return;

        // } 
        console.log(props.cart.includes(props.item))
        if(props.cart.includes(props.item) === false){
          props.setCart([...props.cart, props.item])
         
          props.count.current[props.name] = 1;
          console.log(props.count.current[props.name])
          console.log(props.cart)
        } else {
          props.count.current[props.name] += 1;
          console.log(props.count.current[props.name])
        }
        
          
        
    }

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
              <br/>
              {props.price}
            </Card.Text>
            <Button variant="primary"  onClick={addItem}>Add to Cart</Button>
          </Card.Body>
        </Card>
      );

}

export default BakeryItem;
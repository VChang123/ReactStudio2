import ListGroup from 'react-bootstrap/ListGroup';


export default function CartList(props) {
  const createEntry = (m) => {
    return (
      <ListGroup.Item>{m.name}  x{props.count.current[m.name]}</ListGroup.Item>
    );
  };
  const listData = props.list
  const list = listData.map(createEntry) 

  return <ListGroup>{list}</ListGroup>
  }


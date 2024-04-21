import { useEffect, useState } from "react"
import {Col, Row} from "react-bootstrap"
import { Storeitem } from "../components/Storeitem"
export const Store = () => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(' https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      console.log(data);
      setItems(data);}
    fetchItems();
  }, []);
  return (
   <>
    <Row md={2} lg={3} xl={4} xs={1} className="g-3">
{items.map(item => (
 <Col key={item.id}>
<Storeitem key={item.id} id={item.id} name={item.name} price={item.price} image={item.images} />
 </Col>
))}
    </Row>
   </>
  )
}

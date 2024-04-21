import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartcontext"

type StoreitemProps = {
    id: number,
    name: string,
    price: number,
    image: string,
}


export const Storeitem = ({id, name, price, image} : StoreitemProps) => {

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(id)
  return (
    <Card  className='h-100' key={id}>
        <Card.Body>
        <Card.Img variant="top" src={image} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Title className="d-flex justify-content-space-between align-items-baseline" style={{textOverflow:'ellipsis'}} >
              <span className="fs-2">{name}</span>
              <span className="ms-2 text-muted">${price}</span>
            </Card.Title>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
              ) : <div className=" d-flex align-items-center flex-column" style={{gap:'5rem'}}>
                <div className=" d-flex align-items-center justify content-center" style={{gap:'.5rem'}}>
                <Button className="w-100" onClick={() => decreaseCartQuantity(id)} >-</Button>
                <span className="fs-3">{quantity}</span> in cart
                <Button className="w-100"  onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                </div>}
            </div>
           
        </Card.Body>
    </Card>
  )
}

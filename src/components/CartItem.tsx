import { useEffect, useState } from "react"
import { list } from "../Data/Items"
import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartcontext"
import { Button } from "react-bootstrap"

type CartItemProps = { id: number, quantity: number }


export const CartItem = ({id, quantity} : CartItemProps) => {
    const {removeFromCart, } = useShoppingCart()
    const item = list.find(item => item.id === id)
    if (item == null) return null

    
    
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.image} alt={item.title} style={{width: "125px", height:'75px', objectFit:'contain'}} />
      <div className="me-auto">
        <div>
          {item.title}  {quantity > 1 && <span className="text-muted" style={{fontSize:'.65rem'}}>x{quantity}</span>}
        </div>
        <div style={{fontSize:'.65rem'}}>
          {item.price} <span>ea</span>
        </div>
        <div>
          <div>${item.price * quantity}</div>
          <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
        </div>
      </div>
    </Stack>
  )
}

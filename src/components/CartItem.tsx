import { useEffect, useState } from "react"
import { list } from "../Data/Items"
import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartcontext"

type CartItemProps = { id: number, quantity: number }


export const CartItem = ({id, quantity} : CartItemProps) => {
    const {removeFromCart, } = useShoppingCart()
    const item = list.find(item => item.id === id)
    if (item == null) return null

    
    
  return (
    <Stack gap={3}>
      <img src={item.image}/>
    </Stack>
  )
}

import { Offcanvas,Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartcontext";
import { CartItem } from "./CartItem";
import { list } from "../Data/Items";

type ShoppingCartProps = {
    isOpen: boolean

}

export const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart, cartItems} = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {cartItems.map(item => (
                <CartItem key={item.id} {...item}/>
            ))}
            <div>
              Total {cartItems.reduce((total,cartItem)=>{
                const item = list.find(i => i.id === cartItem.id)
                return total + (item?.price ||  0)* cartItem.quantity
              },0)}
            </div>
            </Stack>
        </Offcanvas.Body>
            
        
    </Offcanvas>
  );
};

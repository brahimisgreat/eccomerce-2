import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from "../Context/ShoppingCartcontext";

export const Navbar = () => {
    const {openCart, cartquantity} = useShoppingCart()
  return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
        <Button onClick={openCart} style={{width: '3rem', height: '3rem', position: 'relative'}} variant="outline-primary" className="rounded-circle">
        {<FaCartShopping />}
        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: 'white', width: '1.5rem', height: '1.5rem', position:"absolute", bottom: '0', right: '0',transform: 'translate(25%, 25%)'}}>
          {cartquantity}
        </div>
        </Button>
    </Container>
  </NavbarBs>;
};

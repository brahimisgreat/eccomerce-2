import { useContext,createContext , useState} from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartproviderProps = {
    children: React.ReactNode
}

type ShoppingCartContextType = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartquantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}


const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartproviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const cartquantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0 
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            }else {
                return currItems.map(item => {
                    if (item.id == id) {
                        return  {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity  === 1) {
                return currItems.filter(item => item.id !== id)
            }else {
                return currItems.map(item => {
                    if (item.id == id) {
                        return  {...item, quantity: item.quantity - 1}
                    }else {
                        return item
                    
                    }
                })
            }
        })
    }

    function removeFromCart(id:number) {
        setCartItems(curritems => {
            return curritems.filter(item => item.id !== id)
        })
    }
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity , increaseCartQuantity, decreaseCartQuantity, removeFromCart,cartItems, cartquantity, openCart, closeCart}}>
            {children}
            <ShoppingCart  isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}
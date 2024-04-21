import { useContext,createContext , useState} from "react";

type ShoppingCartproviderProps = {
    children: React.ReactNode
}

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
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
        <ShoppingCartContext.Provider value={{getItemQuantity , increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
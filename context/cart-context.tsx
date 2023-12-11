import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext<CartContextType>({
  productsInCart: [],
  totalPrice: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  //TODO:
  const totalPrice = 0;

  //TODO:
  const addProductToCart = () => {};

  //TODO:
  const removeProductFromCart = () => {};

  const clearCart = () => {
    setProductsInCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(productsInCart));
  }, [productsInCart]);

  useEffect(() => {
    const localStorageProducts = localStorage.getItem("cartProducts");
    if (!localStorageProducts) return;
    setProductsInCart(JSON.parse(localStorageProducts));
  }, []);

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        totalPrice,
        addProductToCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};

export default CartContextProvider;

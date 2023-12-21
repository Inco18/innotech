import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export const CartContext = createContext<CartContextType>({
  productsInCart: [],
  totalPrice: 0,
  totalSaved: 0,
  totalQuantity: 0,
  changeProductQuantity: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState: Product[] = [];
  const [productsInCart, setProductsInCart] = useState<Product[]>(initialState);
  const totalPrice = productsInCart.reduce((acc, prod) => {
    const actPrice = prod.salePrice ? prod.salePrice : prod.price;
    return acc + actPrice * prod.quantity;
  }, 0);
  const totalSaved = productsInCart.reduce((acc, prod) => {
    return prod.salePrice
      ? acc + (prod.price - prod.salePrice) * prod.quantity
      : acc;
  }, 0);
  const totalQuantity = productsInCart.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  const addProductToCart = (product: Product) => {
    const productIndex = productsInCart.findIndex(
      (val) => val.id === product.id
    );
    if (productIndex >= 0) {
      setProductsInCart((prev) => {
        const newArr = prev.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + product.quantity }
            : prod
        );
        localStorage.setItem("cartProducts", JSON.stringify(newArr));
        return newArr;
      });
      toast.success("Product added to cart");
    } else {
      setProductsInCart((prev) => {
        const newArr = [product, ...prev];
        localStorage.setItem("cartProducts", JSON.stringify(newArr));
        return newArr;
      });
      toast.success("Product added to cart");
    }
  };

  const removeProductFromCart = (productId: number) => {
    setProductsInCart((prev) => {
      const newArr = prev.filter((product) => product.id !== productId);
      localStorage.setItem("cartProducts", JSON.stringify(newArr));
      return newArr;
    });
    toast.success("Product removed from cart");
  };

  const changeProductQuantity = (productId: number, newQty: number) => {
    if (newQty > 99) return;
    if (newQty < 1) {
      setProductsInCart((prev) => {
        const newArr = prev.filter((prod) => prod.id !== productId);
        localStorage.setItem("cartProducts", JSON.stringify(newArr));
        return newArr;
      });
      return;
    }
    setProductsInCart((prev) => {
      const newArr = prev.map((prod) =>
        prod.id === productId ? { ...prod, quantity: newQty } : prod
      );
      localStorage.setItem("cartProducts", JSON.stringify(newArr));
      return newArr;
    });
  };

  const clearCart = () => {
    setProductsInCart([]);
    localStorage.setItem("cartProducts", JSON.stringify([]));
    toast.success("Cart cleared");
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartProducts")!);
    if (cartData) {
      setProductsInCart(cartData);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        totalPrice,
        totalSaved,
        totalQuantity,
        changeProductQuantity,
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

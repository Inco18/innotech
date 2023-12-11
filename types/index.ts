type Product = {
  quantity: number;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type CartContextType = {
  productsInCart: Product[];
  totalPrice: number;
  addProductToCart: () => void;
  removeProductFromCart: () => void;
  clearCart: () => void;
};

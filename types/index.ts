type Product = {
  quantity: number;
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
};

type CartContextType = {
  productsInCart: Product[];
  totalPrice: number;
  totalSaved: number;
  totalQuantity: number;
  changeProductQuantity: (productId: number, newQty: number) => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  clearCart: () => void;
};
type FooterSectionProps = {
  title: string;
  links?: {
    title: string;
    url: string;
    phone?: string;
    workingHours?: {
      weekdays?: string;
      weekends?: string;
    };
    email?: string;
    whatsapp?: string;
    innotechSalons?: string;
  }[];
  phone?: string;
  workingHours?: {
    weekdays: string;
    weekends: string;
  };
  email?: string;
  whatsapp?: string;
  innotechSalons?: string;
};

type subcategoriesProps = {
  id: number;
  name: string;
}[];

type specificationEntriesType = [
  string,
  { value: string; index: number; shortIndex?: number }
][];

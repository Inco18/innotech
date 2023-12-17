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

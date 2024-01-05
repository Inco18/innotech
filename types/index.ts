type Product = {
  quantity: number;
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
};

type CategoryProductProps = {
  id: number;
  name: string;
  price: number;
  sale_price: number | null;
  images: string[];
  specification: any;
  rating: number;
  quantity_sold: number;
};
type SpecificationPageProps = {
  id: number;
  specification: any;
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

type SpecificationItemProps = [
  key: string,
  {
    index?: number;
    value: any;
    shortIndex?: number;
  }
][];

type SpecificationProps = {
  [key: string]: {
    index?: number;
    value: any;
    shortIndex?: number;
  };
};
type FilterMenuOptionProps = {
  filters: [
    string,
    {
      values: { value: string; amount: number }[];
      type?: string;
      min?: number;
      max?: number;
    }
  ];
  searchParams: { [key: string]: any };
  categoryFilters: string[];
};
type SubOptionProps = {
  value: string;
  amount: number;
  filterName: string;
  searchParams: { [key: string]: string | string[] };
  categoryFilters: string[];
};
type Props = {
  searchParams: {};
  categoryFilters: any | null | undefined;
  productsSpecificationsList: {
    specification: any;
  }[];
};
type NewCategoryFiltersProps = {
  [key: string]: {
    values: {
      value: string;
      amount: number;
    }[];
    type?: string;
    min?: number;
    max?: number;
  };
};

type ProductsListProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    page?: number;
    sort_by?: string;
    display_type?: string;
  };
  productsAmount: number;
  productsIds: number[];
};
type MultiRangeSliderProps = {
  min: number;
  max: number;
  searchParams: {
    minSize?: number;
    maxSize?: number;
  };
};
type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    page?: number;
    sort_by?: string;
    display_type?: string;
    page_size?: number;
    from?: number;
    to?: number;
  };
};

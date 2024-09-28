type CollectionType = {
  _id: string;
  title: string;
  products: number;
  image: string;
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: string[];
  category: string;
  collections: string[];
  tags: string[];
  price: number;
  brand: string[];
  sizes: string[];
  colors: string[];
};

type UserType = {
  clerkId: string;
  wishlist: [string];
  createdAt: string;
  updatedAt: string;
};

type OrderType = {
  shippingAddress: Object;
  _id: string;
  customerClerkId: string;
  products: [OrderItemType];
  shippingRate: string;
  totalAmount: number;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
  _id: string;
};

// Define FilterType for the filter functionalities
// Define FilterType for the filter functionalities
type FilterType = {
  size?: string[];       // Array of selected sizes
  color?: string[];      // Array of selected colors
  price?: [number, number]; // Tuple for price range
};


// Define props for the ProductList component
interface ProductListProps {
  filters: FilterType;   // The filter object passed to the ProductList component
}

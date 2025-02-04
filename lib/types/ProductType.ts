export interface Product {
  _id: string;
  name: string;
  image: string;
  oldprice: number;
  newprice: number;
  discount: number;
  rating: number;
}

export interface ProductList {
  productList: Product[];
}

/* 
interface Product {
  _id: string;
  name: string;
  description: string;
  images: string[];
  imagePublicId: string[];
  brand: string;
  oldprice: number;
  newprice: number;
  category: Category;
  catName: string;
  subcategory: Subcategory;
  countInStock: number;
  discount: number;
  productWeight: number;
  rating: number;
  productsize: ProductSize[];
  color: string[];
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Category {
  _id: string;
  name: string;
  images: string[];
  imagePublicId: string[];
  color: string;
  __v: number;
}

interface Subcategory {
  _id: string;
  category: string;
  subcategory: string;
  __v: number;
}

interface ProductSize {
  _id: string;
  productsize: string;
  __v: number;
}

interface ProductList {
  productList: Product[];
}

*/

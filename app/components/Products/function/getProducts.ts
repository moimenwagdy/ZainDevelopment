import axios from "axios";
export default interface product {
  brand: string;
  discountPercentage: number;
  images: string[];
  description: string;
  stock: number;
  title: string;
  price: number;
}

export const getProducts = async (): Promise<product[]> => {
  try {
    const response = await axios.get("https://dummyjson.com/products?limit=20&skip=20");
    const fullArr: product[] = response.data.products;
    return fullArr;
  } catch (error) {
    throw error;
  }
};

import type { ProductDetails, Products } from '@/types/types';

export async function getData(url: string) {
  try {
    const response = await fetch(url);
    const data: unknown = await response.json();

    if (response.ok) {
      return data as Products;
    }
  } catch (error) {
    console.error('Error', error);

    if (error instanceof Error) {
      return error;
    }
  }
}

export async function getCurrentProduct(url: string) {
  try {
    const response = await fetch(url);
    const data: unknown = await response.json();

    if (response.ok) {
      return data as ProductDetails;
    }
  } catch (error) {
    console.error('Error', error);

    if (error instanceof Error) {
      return error;
    }
  }
}

export async function getAllProducts(url: string): Promise<Products> {
  const response = await fetch(url);
  const data: Products = await response.json();
  if (response.ok) {
    return data;
  }

  throw new Error('Something went wrong');
}

import { Products } from '@/types/types';

export default async function getData(url: string) {
  try {
    const response = await fetch(url);
    const data: unknown = await response.json();

    if (response.ok) {
      return data as Products;
    }
  } catch (error) {
    console.error('Error', error);
  }
  throw new Error('Something went wrong');
}

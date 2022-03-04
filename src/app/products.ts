export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

var products_tmp = [
  {id: 1, name: 'aa', description: 'aa aa', price: 1},
  {id: 2, name: 'bb', description: 'bb bb', price: 2000},
  {id: 3, name: 'cc', description: '', price: 3},
]

export const products: Product[] = products_tmp
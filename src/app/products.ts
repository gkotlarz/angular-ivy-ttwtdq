export interface Product {
  name: string;
  description: string;
  price: number;
}

var products_tmp = [
  {name: 'aa', description: 'aa aa', price: 1},
  {name: 'bb', description: 'bb bb', price: 2},
  {name: 'cc', description: 'cc cc', price: 3},
]

export const products: Product[] = products_tmp
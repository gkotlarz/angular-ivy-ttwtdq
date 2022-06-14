export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

var products_tmp = [
  {id: 1, name: 'Audi A4', description: 'The oldest one.', price: 1},
  {id: 2, name: 'Volkswagen Passat', description: 'Big combi.', price: 2000},
  {id: 3, name: 'Fiat Tipo2', description: '', price: 3},
]

export const products: Product[] = products_tmp
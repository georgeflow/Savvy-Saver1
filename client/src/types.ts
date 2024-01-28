export type Item = {
  from: string;
  fromName:string;
  to: string;
  amount: number;
  price: number;
  currentPrice: number;
};

export type SelectIthem = { id: string, name: string };
export type Response = {
  '1. symbol': string;
  '2. name': string;
  '3. type': string;
  '4. region': string;
  '5. marketOpen': string;
  '6. marketClose': string;
  '7. timezone': string;
  '8. currency': string;
  '9. matchScore': string;
};
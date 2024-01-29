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

export type Monthly_Time_Series = {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
};

export type TIME_SERIES_MONTHLY_RESPONSE = {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Time Zone': string;
  };
  'Monthly Time Series': {
    [key:string]: Monthly_Time_Series;
  };
};

//  let res:TIME_SERIES_MONTHLY_RESPONSE = {
//   "Meta Data": {
//     "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
//     "2. Symbol": "IBM",
//     "3. Last Refreshed": "2024-01-26",
//     "4. Time Zone": "US/Eastern"
//   },
//   "Monthly Time Series": {
//     "2024-01-26": {
//       "1. open": "162.8300",
//       "2. high": "196.9000",
//       "3. low": "157.8850",
//       "4. close": "187.4200",
//       "5. volume": "108562536"
//     },
//     "2023-12-29": {
//       "1. open": "158.4100",
//       "2. high": "166.3400",
//       "3. low": "158.0000",
//       "4. close": "163.5500",
//       "5. volume": "87358302"
//     },
//     "2023-11-30": {
//       "1. open": "145.0000",
//       "2. high": "158.6000",
//       "3. low": "144.4500",
//       "4. close": "158.5600",
//       "5. volume": "78460252"
//     }}}
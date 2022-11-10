export enum TransactionState {
  DISPLAY,
  PROCESSING,
  CONFIRMED,
}

export interface ShopExchangeInfo {
  symbol: string;
  decimals: number;
}

export interface CollectionFilter {
  name: string;
  collectionId: string;
  identifier: number | Array<number>;
  // attribute?: { [key: string]: string };
  description: string;
  description2: string;
  description3: string;
  description4: string;
  qubeClaims: string;
}

export interface ShopFilter {
  name: string;
  shopId: string;
}

export enum OrderDefaultFilter {
  COLLECTION = "collection",
  SHOP = "shop",
}

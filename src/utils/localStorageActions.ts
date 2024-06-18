import { CartCache } from 'types/cart';
import { ColorMode } from 'types/theme';

export function getTheme() {
  return (localStorage.getItem('colorMode') ?? 'LIGHT') as ColorMode;
}

export function setTheme(newMode: string) {
  localStorage.setItem('colorMode', newMode);
}

export function getCartCache() {
  const storageData = localStorage.getItem('cartCache');

  if (storageData !== null) {
    let parsedCache;

    try {
      parsedCache = JSON.parse(storageData);

      if (typeof parsedCache == 'object' && isCartCacheType(parsedCache)) {
        console.log(parsedCache);
        return parsedCache;
      }
    } catch {
      console.error('Invalid local storage data');
    }
  }

  const newStorageData: CartCache = { totalPrice: 0, items: [] };
  setCartCache(newStorageData);

  return newStorageData;
}

export function clearCartCache() {
  const newStorageData: CartCache = { totalPrice: 0, items: [] };

  setCartCache(newStorageData);
}

function isCartCacheType(obj: object): obj is CartCache {
  return obj && 'totalPrice' in obj && 'items' in obj;
}

export function setCartCache(cache: CartCache) {
  localStorage.setItem('cartCache', JSON.stringify(cache));
}

import useSWR from 'swr';
import { Market } from '../Types/Market';


export function useMarket(activePage: number, order: string) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=100&page=${activePage}&sparkline=true`;

  const { data, error } = useSWR<Market[]>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}

/*
 const { data, error } = useSWR(['/api/user/123'], (...args) => fetch(...args).then(res => res.json()));
 const fetcher = async (input: RequestInfo, init: RequestInit): Promise<JSON> => {
   const res = await fetch(input, init);
   return res.json();
 };
*/

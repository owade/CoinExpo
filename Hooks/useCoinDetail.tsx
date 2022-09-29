import useSWR from 'swr';
import { Market } from '../Types/Market';


export function useCoinDetail(name: string) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  const { data, error } = useSWR<Market[]>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}
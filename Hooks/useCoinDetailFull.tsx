import useSWR from 'swr';
import { CoinDetail } from '../Types/CoinDetail';


export function useCoinDetailFull(name: string) {
  const url = `https://api.coingecko.com/api/v3/coins/${name}`;

  const { data, error } = useSWR<CoinDetail>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}
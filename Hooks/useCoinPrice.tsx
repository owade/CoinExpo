import useSWR from 'swr';
import { CoinPrice } from '../Types/CoinPrice';


export function useCoinPrice(days: string) {
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`;

  const { data, error } = useSWR<CoinPrice>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}
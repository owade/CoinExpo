import useSWR from 'swr';
import { Trend } from '../Types/Trend';


 function useTrending() {
  const url = `https://api.coingecko.com/api/v3/search/trending`;

  const { data, error } = useSWR<Trend>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}
export {useTrending}
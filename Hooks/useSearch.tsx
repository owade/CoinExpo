import useSWR from 'swr';
import { SearchTypes } from '../Types/Search';


export function useSearch(query: string) {
  if (query === "") query = "btc";
  const url = `https://api.coingecko.com/api/v3/search?query=${query}`;

  const { data, error } = useSWR<SearchTypes>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}


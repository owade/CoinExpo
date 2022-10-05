import useSWR from 'swr';
import { Chain } from '../Types/Chain';


 function useChain() {
  const url = `https://api.coingecko.com/api/v3/asset_platforms`;

  const { data, error } = useSWR<Chain[]>([url], (url: string) => fetch(url).then(res => res.json()));

  return {
    data, error
  }
}
export {useChain}
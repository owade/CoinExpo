import react from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function SparklineV2({ data }: { data: number[] }) {

  const status = () => {
    let temp = (data)?.[data.length-1] - data?.[0];
    if (temp < 0) {
      return "red";
    } else if (temp === 0) {
      return "blue";
    } else if (temp > 0) {
      return "green";
    }
    return "yellow"
  }

  return (
    <Sparklines data={data} width={100} height={35} margin={5}>
      <SparklinesLine color={status()} />
    </Sparklines>
  )
}
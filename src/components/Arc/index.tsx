import { useMemo } from 'react';
import { ORDERED_COLOR_LIST } from '@constants/css';
import { buildD } from './helpers';

type Arc = { color?: string; percentage: number };

type BreakdownProps = React.SVGAttributes<SVGElement> & {
  items: Arc[];
};

const Breakdown: React.FC<BreakdownProps> = ({ items, ...restProps }) => {
  const strokeWidth = 6;
  const range = 240;

  const paths = useMemo(() => {
    let acc = 0;
    return items.map(({ color, percentage }, i) => {
      const d = buildD(acc, percentage, strokeWidth, range);
      const stroke = color || ORDERED_COLOR_LIST[i];
      acc += percentage;

      return { d, stroke, key: stroke };
    });
  }, [items]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 100 ${
        50 + Math.cos((((360 - range) / 2) * Math.PI) / 180) * 50
      }`}
      fill="transparent"
      {...restProps}
    >
      {paths.map(pathProps => (
        <path strokeWidth={strokeWidth} strokeLinecap="round" {...pathProps} />
      ))}
    </svg>
  );
};

export default Breakdown;

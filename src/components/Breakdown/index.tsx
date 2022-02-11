import { useMemo } from 'react';

import Stat from '@components/Stat';
import Arc from '@components/Arc';
import Text from '@components/Text';

import { ORDERED_COLOR_LIST } from '@constants/css';

import css from './index.module.css';

type Items = { title: string; color?: string; value: number };

type BreakdownProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  items: Items[];
};

const Breakdown: React.FC<BreakdownProps> = ({
  title,
  items,
  ...restProps
}) => {
  const total = useMemo(() => {
    let currentTotal = 0;
    items.forEach(({ value }) => {
      currentTotal += value;
    });

    return currentTotal;
  }, []);

  const arcItems = items.map(item => ({
    ...items,
    percentage: (item.value * 100) / total,
  }));

  return (
    <div {...restProps}>
      <div className={css.breakdownArcSectionWrapper}>
        <Stat
          className={css.breakdownAggregationWrapper}
          title={title}
          value={total}
        />
        <Arc className={css.breakdown} items={arcItems} />
      </div>
      <div className={css.breakdownItemsWrapper}>
        {items.map(({ title: itemTitle, value, color }, i) => (
          <div key={itemTitle}>
            <div
              className={css.badge}
              style={{ backgroundColor: color || ORDERED_COLOR_LIST[i] }}
            />
            <Text spacing={1}>{itemTitle}</Text>
            <Text type="valueSmall">{value}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakdown;

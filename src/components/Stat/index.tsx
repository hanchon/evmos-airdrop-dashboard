import Text from '@components/Text';

import cn from 'classnames';
import css from './index.module.css';

export type StatProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  value: string | number;
};

const Stat: React.FC<StatProps> = ({
  title,
  value,
  className = '',
  ...restProps
}) => {
  const classes = cn(className, css.statWrapper);

  return (
    <div className={classes} {...restProps}>
      <Text className={css.title} spacing={2}>
        {title}
      </Text>
      <Text type="value" className={css.value}>
        {value}
      </Text>
    </div>
  );
};

export default Stat;

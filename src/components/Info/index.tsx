import Text from '@components/Text';

import cn from 'classnames';
import css from './index.module.css';

export type InfoProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  value: string | number;
};

const Info: React.FC<InfoProps> = ({
  title,
  value,
  className = '',
  ...restProps
}) => {
  const classes = cn(className, css.infoWrapper);

  return (
    <div className={classes} {...restProps}>
      <Text type="valueSmall" className={css.title} spacing={2}>
        {title}
      </Text>
      <Text className={css.value}>{value}</Text>
    </div>
  );
};

export default Info;

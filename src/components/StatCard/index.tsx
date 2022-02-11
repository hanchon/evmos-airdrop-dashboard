import Card, { CardProps } from '@components/Card';
import cn from 'classnames';
import Stat from '../Stat';
import css from './index.module.css';

export type StatCardProps = CardProps & {
  Icon: React.ReactNode;
  title: string;
  value: number;
};

const StatCard: React.FC<StatCardProps> = ({
  Icon,
  title,
  value,
  className = '',
  ...restProps
}) => {
  const classes = cn(className, css.statCard);

  return (
    <Card className={classes} {...restProps}>
      {/* @ts-ignore */}
      <Icon className={css.icon} />
      <Stat title={title} value={value} />
    </Card>
  );
};

export default StatCard;

import cn from 'classnames';
import css from './index.module.css';

type CardDOMAttr = React.HTMLProps<HTMLElement>;
export type CardProps = CardDOMAttr & {
  title?: string;
  type?: 'primary' | 'secondary';
  'aria-label': string;
};

const Card: React.FC<CardProps> = ({
  title = '',
  className,
  type = 'primary',
  children,
  ...restProps
}) => {
  const classes = cn(className, css.card, css[type]);

  return (
    <article className={classes} {...restProps}>
      {title ? <div className={css.title}>{title}</div> : null}
      {children}
    </article>
  );
};

export default Card;

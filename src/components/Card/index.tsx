import cn from 'classnames';
import css from './index.module.css';

type CardDOMAttr = React.HTMLProps<HTMLElement>;
type CardProps = CardDOMAttr & {
  title?: string;
  'aria-label': string;
};

const Card: React.FC<CardProps> = ({
  title = '',
  className,
  children,
  ...restProps
}) => {
  const classes = cn(className, css.card);

  return (
    <article className={classes} {...restProps}>
      {title ? <div className={css.title}>{title}</div> : null}
      {children}
    </article>
  );
};

export default Card;

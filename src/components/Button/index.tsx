import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import css from './index.module.css';

type ButtonProps = {
  kind?: 'primary' | 'secondary' | 'tertiary';
  Icon?: React.ReactNode;
};

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className,
  children,
  Icon,
  type = 'button',
  kind = 'primary',
  ...restProps
}) => {
  const classes = cn(className, css.button, css[kind]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} {...restProps}>
      {/* @ts-ignore */}
      {Icon ? <Icon className={css.icon} /> : null}
      {children}
    </button>
  );
};

export const LinkButton: React.FC<LinkProps & ButtonProps> = ({
  className,
  children,
  Icon,
  kind = 'primary',
  ...restProps
}) => {
  const classes = cn(className, css.button, css[kind]);

  return (
    <Link className={classes} {...restProps}>
      {/* @ts-ignore */}
      {Icon ? <Icon className={css.icon} /> : null}
      {children}
    </Link>
  );
};

export default Button;

import { ReactNode } from 'react';

import cn from 'classnames';
import css from './index.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'primary' | 'secondary';
  Icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
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

export default Button;

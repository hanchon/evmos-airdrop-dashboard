import cn from 'classnames';
import css from './index.module.css';

type TextDOMAttr = React.HTMLProps<HTMLParagraphElement>;
type TextProps = TextDOMAttr & {
  type?: 'body' | 'pageTitle' | 'value' | 'valueSmall';
  spacing?: number;
};

const Text: React.FC<TextProps> = ({
  className = '',
  children,
  type = 'body',
  spacing = 0,
  ...restProps
}) => {
  const classes = cn({
    [className]: className,
    [css.text]: true,
    [css[type]]: true,
    [css[`spacing-${spacing}`]]: spacing,
  });

  return (
    <p className={classes} {...restProps}>
      {children}
    </p>
  );
};

export default Text;

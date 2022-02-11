import cn from 'classnames';
import css from './index.module.css';

export type ProgressBarProps = React.HTMLProps<HTMLProgressElement> & {};

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = '',
  value,
  ...restProps
}) => {
  const classes = cn(className, css.progressBar);

  return (
    <progress className={classes} max="100" value={value} {...restProps}>
      {value}
    </progress>
  );
};

export default ProgressBar;

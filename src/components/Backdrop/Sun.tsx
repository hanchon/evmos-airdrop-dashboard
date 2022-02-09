type SunProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

const Sun: React.FC<SunProps> = ({
  children,
  width = '100',
  height = '100',
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
};

export default Sun;

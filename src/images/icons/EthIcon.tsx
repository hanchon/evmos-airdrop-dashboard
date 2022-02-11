type EthIconProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

const EthIcon: React.FC<EthIconProps> = ({
  children,
  width = '48',
  height = '48',
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.045 2.40002L9.59998 22.7361L24.045 30.5829L38.4 22.7361L24.045 2.40002ZM11.04 27.9497L24.045 34.5326L36.96 27.9497L24.045 45.6L11.04 27.9497Z"
      />
    </svg>
  );
};

export default EthIcon;

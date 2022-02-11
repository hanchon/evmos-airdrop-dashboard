type QRCodeIconProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

const QRCodeIcon: React.FC<QRCodeIconProps> = ({
  children,
  width = '21',
  height = '21',
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path d="M2.625 9.625V2.625H9.625V9.625H2.625ZM5.25 5.25V7H7V5.25H5.25Z" />
      <path d="M11.375 9.625V2.625H18.375V9.625H11.375ZM14 5.25V7H15.75V5.25H14Z" />
      <path d="M2.625 11.375V18.375H9.625V11.375H2.625ZM7 14V15.75H5.25V14H7Z" />
      <path d="M14 11.375H11.375V13.125H14V16.625H13.125V14.875H11.375V18.375H14.875V16.625H16.625V18.375H18.375V15.75H16.625V14.875H15.75V14H18.375V11.375H15.75V13.125H14V11.375Z" />
    </svg>
  );
};

export default QRCodeIcon;

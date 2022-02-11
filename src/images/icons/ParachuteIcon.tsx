type ParachuteIconProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

const ParachuteIcon: React.FC<ParachuteIconProps> = ({
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
        d="M12.1206 7.32063C15.2712 4.17002 19.5443 2.40002 24 2.40002C19.8629 5.94588 17.5386 10.7551 17.5384 15.7699V17.9077H30.4615V15.7699C30.4613 10.7551 28.137 5.94588 24 2.40002C28.4556 2.40002 32.7287 4.17002 35.8793 7.32063C39.03 10.4712 40.8 14.7444 40.8 19.2V21.7846C40.7997 21.9681 40.7604 22.1495 40.6847 22.3166C40.6089 22.4837 40.4984 22.6328 40.3606 22.7539L31.4307 30.5723C31.644 31.0615 31.754 31.5895 31.7538 32.1231V39.8769C31.7538 40.9052 31.3453 41.8913 30.6183 42.6183C29.8912 43.3454 28.9051 43.7539 27.8769 43.7539H20.123C19.0948 43.7539 18.1087 43.3454 17.3816 42.6183C16.6546 41.8913 16.2461 40.9052 16.2461 39.8769V32.1231C16.2342 31.5826 16.3354 31.0456 16.5433 30.5465L7.61349 22.728C7.48356 22.6075 7.37981 22.4616 7.30867 22.2993C7.23753 22.137 7.20052 21.9618 7.19995 21.7846V19.2C7.19995 14.7444 8.96995 10.4712 12.1206 7.32063ZM20.123 28.2462H22.7076V23.0769H11.9298L18.3526 28.6985C18.8958 28.4024 19.5044 28.2469 20.123 28.2462ZM27.8769 28.2462C28.4955 28.2469 29.1041 28.4024 29.6473 28.6985L36.0701 23.0769H25.2923V28.2462H27.8769Z"
      />
    </svg>
  );
};

export default ParachuteIcon;

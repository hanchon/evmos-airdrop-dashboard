import { useContext, useMemo, useCallback } from 'react';

// Images
import logo from '@images/logo.svg';
import qrcode from '@images/qrcode.svg';

// Components
import { NavLink } from 'react-router-dom';

// Constants
import { NAVIGATION_LINKS } from '@constants/routes';
import { WalletContext } from '@constants/contexts';

// Styles
import cn from 'classnames';
import css from './index.module.css';

export default function NavigationBar(props: any) {
  const { address } = useContext(WalletContext);
  const { pointCount } = props;

  const shortenedAddress = useMemo(() => {
    // TODO: Ask < 11 reason
    if (!address || address.length < 11) {
      return '';
    }

    return `${address.slice(0, 8)}...${address.slice(address.length - 5)}`;
  }, [address]);

  const getNavClassName = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      cn({
        [css.navLink]: true,
        [css.isActive]: isActive,
      }),
    [],
  );

  return (
    <div className={css.wrapper}>
      <img src={logo} alt="Evmos" className={css.logo} />

      <div className={css.pageContainer}>
        {NAVIGATION_LINKS.map(({ name, path: to }) => (
          <NavLink className={getNavClassName} to={to} key={to}>
            {name}
          </NavLink>
        ))}
      </div>

      {/* <div className={address}>
        <div className={cardPointTag addressPoints}>{`${pointCount} PTS`}</div>
        <img src={qrcode} alt="Wallet Address" className={addressQr} />
        <div className={addressWallet}>{shortenedAddress}</div>
      </div> */}
    </div>
  );
}

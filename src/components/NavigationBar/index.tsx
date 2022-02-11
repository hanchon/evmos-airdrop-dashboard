import { useContext, useMemo, useCallback } from 'react';

// Images
import Logo from '@images/Logo';
import QRCodeIcon from '@images/icons/QRCodeIcon';

// Components
import { NavLink } from 'react-router-dom';
import Button from '@components/Button';
import WalletIcon from '@images/icons/WalletIcon';

// Constants
import { MISSION_CONTROLL_ROUTE, NAVIGATION_LINKS } from '@constants/routes';
import { WalletContext } from '@providers/WalletProvider';

// Styles
import cn from 'classnames';
import css from './index.module.css';

export default function NavigationBar(props: any) {
  const { address, openWalletModal } = useContext(WalletContext);
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
      <NavLink className={css.logo} to={MISSION_CONTROLL_ROUTE.path}>
        <Logo />
      </NavLink>

      <div className={css.navWrapper}>
        {NAVIGATION_LINKS.map(({ name, path: to, Icon }) => (
          <NavLink className={getNavClassName} to={to} key={to}>
            {/* @ts-ignore */}
            <Icon className={css.navLinkIcon} />
            {name}
          </NavLink>
        ))}
      </div>

      <div className={css.walletWrapper}>
        {address ? (
          <div>
            {/* <div className={cardPointTag addressPoints}>{`${pointCount} PTS`}</div> */}
            <QRCodeIcon />
            <div>{shortenedAddress}</div>
          </div>
        ) : (
          <Button Icon={WalletIcon} kind="secondary" onClick={openWalletModal}>
            Connect Wallet
          </Button>
        )}
      </div>
    </div>
  );
}

import { useState, useContext, useMemo, useCallback } from 'react';

// Images
import Logo from '@images/Logo';
import MetamaskIcon from '@images/icons/MetamaskIcon';
import KeplrIcon from '@images/icons/KeplrIcon';
// import QRCodeIcon from '@images/icons/QRCodeIcon';

// Components
import { NavLink } from 'react-router-dom';
import Button from '@components/Button';
import WalletIcon from '@images/icons/WalletIcon';
import Modal from '@components/Modal';
// Constants
import { MISSION_CONTROLL_ROUTE, NAVIGATION_LINKS } from '@constants/routes';
import { WalletContext } from '@constants/contexts';

// Styles
import cn from 'classnames';
import css from './index.module.css';

export default function NavigationBar(props: any) {
  const [isModalShown, setIsModalShown] = useState(false);
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
      <Modal
        title="Connect Wallet"
        isOpen={isModalShown}
        onClose={() => setIsModalShown(false)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Button
            kind="tertiary"
            Icon={MetamaskIcon}
            style={{
              justifyContent: 'flex-start',
            }}
          >
            Metamask
          </Button>
          <Button
            kind="tertiary"
            Icon={KeplrIcon}
            style={{
              justifyContent: 'flex-start',
            }}
          >
            Keplr
          </Button>
        </div>
      </Modal>
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
        <Button
          Icon={WalletIcon}
          kind="secondary"
          onClick={() => setIsModalShown(true)}
        >
          Connect Wallet
        </Button>
        {/* <div className={cardPointTag addressPoints}>{`${pointCount} PTS`}</div>
        <img src={qrcode} alt="Wallet Address" className={addressQr} />
        <div className={addressWallet}>{shortenedAddress}</div> */}
      </div>
    </div>
  );
}

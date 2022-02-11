import { useMemo, useState } from 'react';

// Assets
import Logo from '@images/Logo';
import WalletIcon from '@images/icons/WalletIcon';

// Components
import Button, { LinkButton } from '@components/Button';

// Constants
import { MISSION_CONTROLL_ROUTE } from '@constants/routes';

// Styles
import cn from 'classnames';
import css from './index.module.css';

import { connectKeplrWallet } from '../../services/keplr';

export interface LandingPageProps {
  updateKeplrState: (address: string | null) => void;
}

export default function LandingPage(props: LandingPageProps) {
  const [count, setCount] = useState(0);
  const { updateKeplrState } = props;

  async function connectKeplrAndUpdateState() {
    const address = await connectKeplrWallet();
    updateKeplrState(address);
  }

  const qClasses = useMemo(
    () =>
      cn({
        [css.q]: true,
        [css.discover]: count > 0 && count < 3,
        [css.rekt]: count >= 3,
      }),
    [count],
  );

  return (
    <div className={css.base}>
      <Logo className={css.logo} />

      <h1 className={css.h1}>
        Got rekt
        {/* eslint-disable-next-line */}
        <span className={qClasses} onClick={() => setCount(c => c + 1)}>
          ?
        </span>
      </h1>
      <p className={css.bodyText}>
        Nulla facilisi. Nam accumsan rhoncus justo vel faucibus. Curabitur ut
        libero vitae tellus fringilla ultricies.
      </p>

      <div className={css.buttonsWrapper}>
        <Button Icon={WalletIcon} onClick={() => connectKeplrAndUpdateState()}>
          Connect Wallet
        </Button>

        <LinkButton kind="secondary" to={MISSION_CONTROLL_ROUTE.path}>
          Enter
        </LinkButton>
      </div>
    </div>
  );
}

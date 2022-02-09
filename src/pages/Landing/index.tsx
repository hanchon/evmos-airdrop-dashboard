import Logo from '@images/Logo';

import Button from '@components/Button';

import { connectKeplrWallet } from '../../services/keplr';

// Styles
import css from './index.module.css';

import WalletIcon from '@images/icons/WalletIcon';

export interface LandingPageProps {
  updateKeplrState: (address: string | null) => void;
}

export default function LandingPage(props: LandingPageProps) {
  const { updateKeplrState } = props;

  async function connectKeplrAndUpdateState() {
    const address = await connectKeplrWallet();
    updateKeplrState(address);
  }

  return (
    <div className={css.base}>
      <Logo className={css.logo} />

      <h1 className={css.h1}>
        Got rekt<span className={css.q}>?</span>
      </h1>
      <p className={css.bodyText}>
        Nulla facilisi. Nam accumsan rhoncus justo vel faucibus. Curabitur ut
        libero vitae tellus fringilla ultricies.
      </p>

      <div className={css.buttonsWrapper}>
        <Button Icon={WalletIcon} onClick={() => connectKeplrAndUpdateState()}>
          Connect Wallet
        </Button>

        <Button kind="secondary" onClick={() => connectKeplrAndUpdateState()}>
          Enter
        </Button>
      </div>
    </div>
  );
}

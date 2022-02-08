import logo from '@images/logo.svg';
import walletButton from '@images/walletButton.svg';
import { connectKeplrWallet } from '../../services/keplr';

// Styles
import css from './index.module.css';

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
      <div className="page-body">
        <img src={logo} alt="Evmos" className="la--logo" />
        <h1 className="la--title">Rektdrop Rewards</h1>
        <p className="la--body">
          Nulla facilisi. Nam accumsan rhoncus justo vel faucibus. Curabitur ut
          libero vitae tellus fringilla ultricies. Pellentesque ullamcorper
          felis at tincidunt mattis.
        </p>
        <div
          onClick={connectKeplrAndUpdateState}
          onKeyDown={connectKeplrAndUpdateState}
        >
          <img src={walletButton} alt="Connect Wallet" className="la--wallet" />
        </div>
      </div>
    </div>
  );
}

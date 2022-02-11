import { useContext, useEffect, useState } from 'react';

// Components
import Info from '@components/Info';
import Card from '@components/Card';
import Text from '@components/Text';
import Button from '@components/Button';
import ProgressBar from '@components/ProgressBar';
import Stat from '@components/Stat';

// Images
import AstronautIcon from '@images/icons/AstronautIcon';

// Types
import type { Claim } from '@hanchon/evmosjs';

// Constants
import { WalletContext } from '@providers/WalletProvider';

// Utils
import getRektDropInformation from '../../services/evmos';

// Styles
import css from './index.module.css';

export default function RektdropRewardsPage() {
  const { address } = useContext(WalletContext);

  // --
  const [rektDropClaims, setRektDropClaims] = useState<Claim[]>([]);
  const [rektDropError, setRektDropError] = useState('');

  useEffect(() => {
    async function apiCall() {
      const rektDropInformationResponse = getRektDropInformation(address);
      setRektDropClaims((await rektDropInformationResponse).claims);
      setRektDropError((await rektDropInformationResponse).error);
    }

    apiCall();
  }, []);

  return (
    <>
      <Text type="pageTitle">Claim Your Rektdrop</Text>

      <div className={css.claimCardsWrapper}>
        <Card className={css.progressCard} aria-label="Claim Progress">
          <Text type="valueSmall">Progress</Text>
          <ProgressBar className={css.progress} value={50} />
          <Text type="value">50%</Text>
        </Card>

        <Card className={css.claimCard} aria-label="">
          <AstronautIcon className={css.claimCardIcon} />
          <Info
            className={css.claimCardInfo}
            title="Vivamus quis velit nec augue loborti"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum."
          />
          <div className={css.CTAWrapper}>
            <Button kind="secondary">25%</Button>
            <Button>Claim</Button>
          </div>
        </Card>

        <Card className={css.claimCard} aria-label="">
          <AstronautIcon className={css.claimCardIcon} />
          <Info
            className={css.claimCardInfo}
            title="Vivamus quis velit nec augue loborti"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum."
          />
          <div className={css.CTAWrapper}>
            <Button kind="secondary">25%</Button>
            <Button>Claim</Button>
          </div>
        </Card>

        <Card className={css.claimCard} aria-label="">
          <AstronautIcon className={css.claimCardIcon} />
          <Info
            className={css.claimCardInfo}
            title="Vivamus quis velit nec augue loborti"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum."
          />
          <div className={css.CTAWrapper}>
            <Button kind="secondary">25%</Button>
            <Button>Claim</Button>
          </div>
        </Card>

        <Card className={css.claimCard} aria-label="">
          <AstronautIcon className={css.claimCardIcon} />
          <Info
            className={css.claimCardInfo}
            title="Vivamus quis velit nec augue loborti"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum."
          />
          <div className={css.CTAWrapper}>
            <Button kind="secondary">25%</Button>
            <Button>Claim</Button>
          </div>
        </Card>

        <Card type="secondary" className={css.claimCard} aria-label="">
          <AstronautIcon className={css.claimCardIcon} />
          <Info
            className={css.claimCardInfo}
            title="Coming Soon"
            value="Lorem ipsum dolor sit amet uris in odio fermentum."
          />
          <div className={css.countdownWrapper}>
            <Stat title="Days" value={12} />
            <Stat title="Hrs" value={8} />
            <Stat title="Mins" value={17} />
            <Stat title="Secs" value={56} />
          </div>
        </Card>
      </div>
    </>
  );
}

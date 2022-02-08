import { useContext, useEffect, useState } from 'react';

// Components
import Card from '@components/Card';

// Assets
import rektdropIcon from '@images/rektdropIcon.svg';

// Types
import type { Claim } from '@hanchon/evmosjs';

// Constants
import { WalletContext } from '@constants/contexts';

// Utils
import getRektDropInformation from '../../services/evmos';

export default function RektdropRewardsPage() {
  const { address } = useContext(WalletContext);
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
    <div className="page-base page-content">
      <div className="page--header">Rektdrop Rewards</div>
      {rektDropError ? (
        <p className="rekt-error">{rektDropError} </p>
      ) : (
        <Card title="Foo title" aria-label="This is a foo card">
          Foo
        </Card>
      )}
    </div>
  );
}

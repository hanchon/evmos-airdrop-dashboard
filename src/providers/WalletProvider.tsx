/* eslint-disable import/prefer-default-export */
import React, { useMemo, useEffect } from 'react';

// Components
import Modal, { useModal } from '@components/Modal';
import Button from '@components/Button';

// Images
import MetamaskIcon from '@images/icons/MetamaskIcon';
import KeplrIcon from '@images/icons/KeplrIcon';

import { connectKeplrWallet } from '../services/keplr';

export const WalletContext = React.createContext({
  address: '',
  openWalletModal: () => {},
});

const WalletProvider: React.FC<{}> = ({ children }) => {
  const [{ open }, modalProps] = useModal();
  const [address, setAddress] = React.useState('');

  async function connectKeplrAndUpdateState() {
    const maybeAddress = await connectKeplrWallet();
    setAddress(maybeAddress ?? '');
  }

  const providerValue = useMemo(() => {
    return {
      address,
      openWalletModal: open,
    };
  }, [address]);

  useEffect(() => {
    connectKeplrAndUpdateState();
  }, []);

  return (
    <WalletContext.Provider value={providerValue}>
      <Modal title="Connect Wallet" {...modalProps}>
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
            onClick={() => connectKeplrAndUpdateState()}
          >
            Keplr
          </Button>
        </div>
      </Modal>

      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

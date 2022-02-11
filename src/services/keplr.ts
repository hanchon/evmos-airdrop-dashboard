import { chainId } from '@constants';

interface KeplrWindow extends Window {
  keplr: any;
  getOfflineSignerOnlyAmino: (chainId: string) => any; // This type is OfflineSigner from @cosmjs/launchpad, but it's not worth the dependency
}

declare let window: KeplrWindow;

// eslint-disable-next-line import/prefer-default-export
export const connectKeplrWallet = async (): Promise<string | null> => {
  const { keplr, getOfflineSignerOnlyAmino } = window;

  console.log('Checking keplr');

  if (!getOfflineSignerOnlyAmino || !keplr) {
    const error = 'Please install Keplr extension';
    console.error(error);
    // TODO: handle error
    return null;
  }

  await keplr.enable(chainId);

  const offlineSigner = getOfflineSignerOnlyAmino(chainId);
  const accounts = await offlineSigner.getAccounts();

  if (accounts.length > 0) {
    return accounts[0].address;
  }

  console.log('No accounts found');

  return null;
};

'use client';

import { ConnectedWallet, useWallets } from '@privy-io/react-auth';
import { useSetActiveWallet } from '@privy-io/wagmi';
import { useMemo } from 'react';
import { Address } from 'viem';

export const useSessionWalletAddress = () => {
  const { wallets } = useWallets();
  const { setActiveWallet } = useSetActiveWallet();

  const address = useMemo(() => {
    const embeddedWallets: ConnectedWallet[] = wallets.filter(
      (wallet) =>
        wallet.connectorType === 'embedded' &&
        wallet.walletClientType === 'privy',
    );

    if (embeddedWallets.length == 0) {
      return undefined;
    }

    return embeddedWallets[0].address as Address;
  }, [wallets]);

  const setSessionWallet = () => {
    const embeddedWallets: ConnectedWallet[] = wallets.filter(
      (wallet) =>
        wallet.connectorType === 'embedded' &&
        wallet.walletClientType === 'privy',
    );

    if (embeddedWallets.length == 0) {
      return;
    }

    setActiveWallet(embeddedWallets[0]);
  };

  return { address, setSessionWallet };
};

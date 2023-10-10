export type CreateWalletData = {
  namespace: string;
  walletAddr: string;
  signature: string;
};

export type CreateACLData = {
  walletAddr: string;
  signature: string;
  rule: {
    namespace: string;
    senderGroup: {
      addrs: string[];
      name: string;
    };
    recipientAddr: string;
    tokenAddr: string;
  };
};

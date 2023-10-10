import { CreateACLData, CreateWalletData } from "../types";

export const createWallet = (createWalletData: CreateWalletData) => {};

export const getNonce = (walletAddr: string) => {};

export const getSignature = (txHash: string) => {};

export const getPubKey = (walletAddr: string) => {};

export const getRulebook = (walletAddr: string) => {};

export const storeRule = (createRuleData: CreateACLData) => {};

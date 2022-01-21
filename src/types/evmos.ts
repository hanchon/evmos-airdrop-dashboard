import {Claim} from '.';

export type {Claim} from '@hanchon/evmosjs';

export interface ClaimRecord {
  initial_claimable_amount: any;
  claims: Claim[];
  address: string;
  error: string;
}

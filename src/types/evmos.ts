import type { Claim } from '@hanchon/evmosjs';

export interface ClaimsRecord {
  initial_claimable_amount: any;
  claims: Claim[];
  address: string;
  error: string;
}

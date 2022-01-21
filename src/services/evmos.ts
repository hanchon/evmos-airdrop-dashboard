import {RestInstance, getClaimRecords} from '@hanchon/evmosjs';
import {ClaimRecord} from '../types';

const EVMOS_URL = 'http://rest.evmos.me/';

const EvmosClient = new RestInstance(EVMOS_URL);

export default async function getRektDropInformation(
  address: string,
): Promise<ClaimRecord> {
  return getClaimRecords(EvmosClient, address);
}

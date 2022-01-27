import { RestInstance, getClaimsRecord } from '@hanchon/evmosjs';
import { ClaimsRecord } from '../types';

const EVMOS_URL = 'https://rest.evmos.me/';

const EvmosClient = new RestInstance(EVMOS_URL);

export default async function getRektDropInformation(
  address: string,
): Promise<ClaimsRecord> {
  return getClaimsRecord(EvmosClient, address);
}

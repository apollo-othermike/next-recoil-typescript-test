import { atom, selector } from "recoil";
import request from "axios";

// type by steak enjoys https://github.com/steak-enjoyers/steak-webapp/blob/main/types/index.ts
export interface ValidatorsResponse {
  validators: {
    operator_address: string;
    consensus_pubkey: {
      "@type": string;
      key: string;
    };
    jailed: boolean;
    status:
      | "BOND_STATUS_BONDED"
      | "BOND_STATUS_UNBONDING"
      | "BOND_STATUS_UNBONDED";
    tokens: string;
    delegator_shares: string;
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    unbonding_height: string;
    unbonding_time: string;
    commission: {
      commission_rates: {
        rate: string;
        max_rate: string;
        max_change_rate: string;
      };
      update_time: string;
    };
    min_self_delegation: string;
  }[];
}

export const testAtomState = atom({
  key: "testAtom",
  default: "testing 1 2 3",
});

export const restEndpointState = atom({
  key: "restEndpoint",
  default: "https://osmo-test-lcd.apollo.farm",
});

export const validatorsQuery = selector({
  key: "validatorsQuery",
  get: async ({ get }) => {
    const endpoint = get(restEndpointState);
    const response = await request.get<ValidatorsResponse>(
      `${endpoint}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=150`
    );
    return response.data;
  },
});

import * as React from 'react';

import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { network } from 'config';

import { denominated } from 'helpers/denominate';
import { useApp } from 'provider';

interface MetaType {
  label: string;
  data: string;
}

const Meta: React.FC = () => {
  const { egldLabel } = useApp();
  const { address, account } = useGetAccountInfo();

  const meta: Array<MetaType> = [
    {
      label: 'Contract Address',
      data: network.delegationContract
    },
    {
      label: 'Wallet Address',
      data: address
    },
    {
      label: 'Balance',
      data: `${denominated(account.balance)} ${egldLabel}`
    }
  ];

  return (
    <div>
      {meta.map((item) => (
        <div key={item.label} className='mb-4'>
          <strong>{item.label}: </strong> <br />
          {item.data}
        </div>
      ))}
    </div>
  );
};

export default Meta;

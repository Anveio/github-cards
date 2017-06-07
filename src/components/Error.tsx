import * as React from 'react';
import { Banner } from '@shopify/polaris';

interface Props { error: GithubApiError | null; onDismiss(): void; }
const Error = ({error, onDismiss}: Props ) => {
  return (
    <Banner
      title="User doesn't exist"
      status="critical"
      onDismiss={onDismiss}
    >
      <p>Error retreiving user</p>
    </Banner>
  );
};

export default Error;
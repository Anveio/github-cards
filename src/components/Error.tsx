import * as React from 'react';
import { Banner } from '@shopify/polaris';

interface Props { error: GithubApiError; dismissError(): void; }
const Error = ({error, dismissError}: Props ) => {
  return (
    <Banner
      title="User doesn't exist"
      status="critical"
      onDismiss={dismissError}
    >
      <p>Error retreiving user.</p>
    </Banner>
  );
};

export default Error;
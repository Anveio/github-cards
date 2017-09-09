import * as React from 'react';
import { Banner } from '@shopify/polaris';
import { AxiosError } from 'axios';

interface Props { error: AxiosError; dismissError(): void; }
const ErrorBanner = ({error, dismissError}: Props ) => {
  return (
    <Banner
      title="User doesn't exist"
      status="critical"
      onDismiss={dismissError}
    >
      <p>Error retreiving user. {error.message}</p>
    </Banner>
  );
};

export default ErrorBanner;
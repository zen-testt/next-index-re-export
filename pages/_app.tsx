import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps, appData }: any) => {
  return <Component {...pageProps} />;
};

export default MyApp;

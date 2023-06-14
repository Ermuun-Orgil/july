import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Template project</title>
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

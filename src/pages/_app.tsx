import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import "../styles/global.scss"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

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
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>1st July</title>
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

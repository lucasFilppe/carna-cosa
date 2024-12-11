import { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carnaval em Ouro Preto | Carnacosa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

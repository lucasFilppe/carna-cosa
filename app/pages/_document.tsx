import { Html, Head, NextScript } from "next/document";
import Home from "../page";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Conheça o Carnaval de Ouro Preto, com festas universitárias, blocos tradicionais e uma rica experiência cultural em Minas Gerais."
        />
        <meta
          name="google-site-verification"
          content="eQmpe7XzsiOXHswLKm9OYwKFqpDAWe9hZNEX4qB9Wk8"
        />
      </Head>
      <body>
        <Home/>
        <NextScript />
      </body>
    </Html>
  );
}

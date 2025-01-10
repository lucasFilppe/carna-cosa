import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Página Não Encontrada</title>
        <meta name="description" content="Página não encontrada. Volte para a página inicial." />
      </Head>
      <div className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500">404 - Página Não Encontrada</h1>
        <p className="text-xl text-gray-700 mt-4">Desculpe, não conseguimos encontrar o que você está procurando.</p>
        <Link className="mt-6 text-blue-500 hover:text-blue-700 text-lg"
        href="/">
          Voltar para a Página Inicial
        </Link>
      </div>
    </>
  );
}


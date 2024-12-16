import Head from 'next/head';

const Informacoes = () => {
  return (
    <>
      <Head>
        <title>Informações sobre o Carnaval</title>
        <meta name="description" content="Saiba todas as informações importantes para curtir o carnaval com segurança e diversão." />
      </Head>
      <main>
        <h1>Informações sobre o Carnaval</h1>
        <p>
          Aqui você encontra todos os detalhes sobre os horários, locais e dicas para aproveitar o carnaval ao máximo.
        </p>
        <ul>
          <li><strong>Horários:</strong> Das 10h às 23h</li>
          <li><strong>Locais:</strong> Diversos pontos na cidade</li>
          <li><strong>Ingressos:</strong> Disponíveis online e em pontos de venda</li>
        </ul>
      </main>
    </>
  );
};

export default Informacoes;

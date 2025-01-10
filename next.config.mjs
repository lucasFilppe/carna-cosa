/** @type {import('next').NextConfig} */
const nextConfig = {
  //typescript: {
    // Ignore TypeScript errors during the build process
    //ignoreBuildErrors: true,
  //},
  webpack(config, { isServer }) {
    // Configuração aplicada apenas no lado do cliente
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all', // Aplica divisão de chunks para todos os tipos (async e sync)
        maxSize: 200000, // Tamanho máximo de cada chunk em bytes
      };
    }
    return config;
  },
};

export default nextConfig;

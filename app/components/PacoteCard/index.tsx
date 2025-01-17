// Definições das interfaces
interface Item {
  emoji?: string;
  text: string;
}

interface Pacote {
  titulo: string;
  tipo: string;
  items: Item[];
}
export default function PacoteCard({ titulo, tipo, items }: Pacote) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-2xl font-bold text-pink-600">{titulo}</h2>
      <p className="text-sm text-gray-600 mb-2">{tipo}</p>
      <ul className="list-disc list-inside text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2"> {/* Alterei aqui */}
            {item.emoji && <span className="text-sm">{item.emoji}</span>}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="max-w-4xl mx-auto my-5 text-center">
        <button className="bg-customBlue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
          <a
            href="https://wa.me/5531972041833"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar pacote
          </a>
        </button>
      </div>
    </div>
  );
}


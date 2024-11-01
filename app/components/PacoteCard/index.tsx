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

// Componente PacoteCard usando export default
export default function PacoteCard({ titulo, tipo, items}: Pacote) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-2xl font-bold text-pink-600">{titulo}</h2>
      <p className="text-sm text-gray-600 mb-2">{tipo}</p>
      <ul className="list-disc list-inside text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            {item.emoji && <span>{item.emoji}</span>}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}



